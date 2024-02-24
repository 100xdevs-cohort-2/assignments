import { Hono, MiddlewareHandler} from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { z } from 'zod';
import { decode, sign, verify } from 'hono/jwt';
import { getPostInstallTrigger } from '@prisma/client/scripts/postinstall.js';

type Variables = {
  email: string
}

const prisma = new PrismaClient().$extends(withAccelerate());
const app = new Hono<{ Variables: Variables }>();
const JWT_secret = 'My_Secret_Key';

const SingupZod = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().min(6)
});

const loginZod = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

const postZod = z.object({
  title: z.string().optional(),
  body: z.string()
})


interface UserInterface {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface PostInterface {
  title: string;
  body: string;
  userId: number;
}

// async function createUser(User: UserInterface): Promise<UserInterface>{
// }



// async function getUsers(): Promise<UserInterface[]> {
async function getUsers() {
  const allUsers  = await prisma.user.findMany()

  return allUsers;
}

async function getUser(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: {
      email: true,
      firstName: true,
      lastName: true,
      password: true
    }
  })

  return user;
}

async function getuserId(email: string) {
  const userId = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: {
      id: true
    }
  })
  
  return userId;
}

async function createUser(email: string, firstName: string, lastName: string, password: string) {
  
  const user = await prisma.user.create({
    data: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    }
  })
  
  console.log("USER CREATED");
  return user;
}

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

async function getPost(postId: number) {
  const post = await prisma.post.findUnique({
    where: {
      id: postId
    },
    select: {
      title: true,
      body: true
    }
  })

  return post;
}

async function createPost(email: string, title: string, body:string) {
  const userId = await getuserId(email);
  if (userId) {
    const post = await prisma.post.create({
      data: {
        title: title,
        body: body,
        userId: userId.id
      },
      select: {
        title: true,
        body: true
      }
    })

    return post
  }
  else {
    return null;
  }
}

async function updatePost(id: number, title: string, body: string) {
  const post = prisma.post.update({
    where: { id: id},
    data: {title: title, body: body},
    select : {title: true, body: true}
  })
  return post;
}

async function postOwner(id: number) {
  const userId = prisma.post.findUnique({
    where: {
      id:id
    },
    select: {
      userId: true
    }
  })

  return userId;
}

async function deletePost(postId: number) {
  const deleted = prisma.post.delete({
    where: {
      id: postId
    }
  })
  return deleted;
}


app.get('/', (c) => {  
  return c.text('Get /');
})

app.post('/users/signup', async (c) => {
  console.log("POST /users/signup");
  const body = await c.req.json();
  // console.log(body);

  const result = SingupZod.safeParse(body);
  console.log(result);

  if (result.success) {
    const createdUser = await createUser(body.email, body.firstName, body.lastName, body.password);
    console.log(createdUser);
    return c.text('Signup successful');
  }

  return c.text('Data validations failed, Please try again with valid input');
})

app.post('/users/signin', async (c) => {
  console.log('POST /users/signin');
  const body = await c.req.json();
  const result = loginZod.safeParse(body);
  
  if (result.success) {
    const user = await getUser(body.email);
    if (user) {
      if (user.password == body.password) {
        const token = await sign(body.email, JWT_secret);
        return c.text(token);
      }
    }
    else {
      return c.text('Invalid Credentials');
    }
  }
  else {
    return c.text('Data validations failed, Please try again with valid input');
  }

})

app.get('/users', async (c) => {
  const allUsers = await getUsers();
  console.log(allUsers);

  return c.json(allUsers);
})

app.get('/posts', async (c) => {
  const allPosts  = await getPosts();
  console.log(allPosts);

  return c.json(allPosts);
})


// async function authMiddleware (c, next) {
const authMiddleware: MiddlewareHandler = async (c, next) => {
  const token = c.req.header('Authorization');
  if (!token) {
    return c.text("Token Missing");
  }

  try {
    const decodedPayload = await verify(token, JWT_secret);
    c.set('email', decodedPayload);
  }
  catch (e) {
    return c.text("Please enter Valid Token");
  }
  
  await next();
}


app.post('/posts', authMiddleware , async (c) => {
    const email = c.get('email');
    const body = await c.req.json();

    const result = postZod.safeParse(body);

    if(result.success) {
      const post = await createPost(email, body.title, body.body);
      console.log(post);
      return c.text('Thanks for posting');
    }
    else {
      return c.text("Please send valid data");
    }
  }
)

app.get('/posts/:id', authMiddleware, async (c) => {

  const postId = c.req.param('id');
  if(postId) {
    const id = parseInt(postId, 10);
    const post = await getPost(id);
    return c.json(post);
  }
})

app.put('/posts/:id', authMiddleware, async (c) => {

  const currentUserMail = c.get('email');
  const postId = c.req.param('id');
  const body = await c.req.json();

  if(postId) {
    const id = parseInt(postId, 10);
    const ownerId = await postOwner(id);
    const currentUserId = await getuserId(currentUserMail);
    if(ownerId && currentUserId) {
      if (ownerId.userId == currentUserId.id) {
        const post = await updatePost(id, body.title, body.body);
        return c.json(post);
      }
    }

    return c.text('update post')
  }
})

app.delete('/posts/:id', authMiddleware, async (c) => {
  const currentUserMail = c.get('email');
  const postId = c.req.param('id');

  if(postId) {
    const id = parseInt(postId, 10);
    const ownerId = await postOwner(id);
    const currentUserId = await getuserId(currentUserMail);
    if(ownerId && currentUserId) {
      if(ownerId.userId == currentUserId.id) {
        
        const deletedPost = await deletePost(id);
        console.log(deletedPost);

        return c.json('Successfuly deleted post');
      }
    }
  }
})

export default app
