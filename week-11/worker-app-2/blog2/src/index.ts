import { Hono, MiddlewareHandler } from 'hono';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign, verify } from 'hono/jwt';
import { getPostInstallTrigger } from '@prisma/client/scripts/postinstall.js';

type Variables = {
  email : string
}

const app = new Hono<{ Variables: Variables}>();
const prisma = new PrismaClient().$extends(withAccelerate());
const JWT_secret = "top_secret";


const singupZod = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(6)
});
const signinZod = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

const postZod = z.object({
  title: z.string(),
  body: z.string().optional(),
  tags: z.string().array()
});

const authenticationMiddleware: MiddlewareHandler = async (c, next) => {
  const token = c.req.header('Authorization');
  if (!token) {
    return c.text('Please send Authorization token');
  }
  
  try {
    const decodedPayload = await verify(token, JWT_secret);
    c.set('email', decodedPayload);
    await next();
  }  
  catch (e) {
    c.text('Please enter valid token');
  }
}


async function createUser(email: string, username: string, password: string) {
  const createdUser = await prisma.user.create({
    data: {
      email: email,
      username: username,
      password: password
    }, 
    select: {
      email: true,
      username: true
    }
  })

  return createdUser;
}
async function getUser(email: string) {
  const creds = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: {
      email: true,
      password: true
    }
  })
  return creds;
}

async function getAllPosts() {
  const allPosts = await prisma.post.findMany({
    select: {
      title: true,
      body: true,
      tags: true
    },
  });
  return allPosts;
}

async function getUserId(email: string) {
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

async function createPost(userId: number, title: string, body: string, tags: string[]) {
  const post = await prisma.post.create({
    data: {
      title: title,
      body: body,
      userId: userId,
      tags: {
        create: tags.map(tag => ({name: tag})),
      },
    },
    include: {
      tags: true
    }
  })

  return post;
}

async function getPost(id:number) {
  const post = await prisma.post.findUnique({
    where: {
      id: id
    },
    include: {
      tags: true
    }
  });
  return post;
}


app.get('/', (c) => {
  
  return c.text('Hello Hono!')
})

app.post('/users/signup', async (c) => {
  const body = await c.req.json();
  const result = singupZod.safeParse(body);
  if(result.success) {
    const user = await createUser(body.email, body.username, body.password);
    return c.json(user);
  }
  else {
    return c.text('Please enter valid data');
  }
});

app.post('/users/signin', async (c) => {
  const body = await c.req.json()
  const result = signinZod.safeParse(body);
  if(result.success) {
    // match with DB and return jwt token
    const creds = await getUser(body.email);
    if (creds) {
      if (creds.password == body.password) {
        const token = await sign(body.email, JWT_secret);
        return c.json(token);
      }
    }
    return c.text('signin');
  }
  return c.text('Please send formatted credentials');
})


app.get('/posts', async (c) => {
  const allPosts = await getAllPosts();
  console.log('returning all posts');
  console.log(allPosts);
  return c.json(allPosts);
})


app.post('/posts', authenticationMiddleware, async (c) => {
  const userEmail = c.get('email');
  const userId = await getUserId(userEmail);
  if (!userId) {
    return c.text("Authentication failure");
  }
  const body = await c.req.json();

  const result = postZod.safeParse(body);
  if (result.success) {
    const post = await createPost(userId.id, body.title, body.body, body.tags);
    console.log(post);
    return c.text('Post Created');
  } 
  return c.text('Please send valid data');
})

app.get('/posts/:id', async (c) => {
  const id = c.req.param('id');
  if(!id) {
    return c.text('Please send post id');
  }
  const post = await getPost(parseInt(id, 10));
  console.log(post);
  return c.json(post);
}) 


export default app
