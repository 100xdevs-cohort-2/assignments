import { Hono, MiddlewareHandler } from "hono";
import { z } from "zod";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

type Variables = {
  email: string;
};

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

const app = new Hono<{ Variables: Variables; Bindings: Bindings }>();

const Signup = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(6),
});

const Login = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Post = z.object({
  title: z.string(),
  body: z.string().optional(),
  tags: z.string().array(),
});

async function getUser(datasourceUrl: string, email: string) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      email: true,
      password: true,
    },
  });

  return user;
}

async function getUserId(datasourceUrl: string, email: string) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const userId = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });

  return userId;
}

async function createUser(datasourceUrl: string, email: string, username: string, password: string) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const user = await prisma.user.create({
    data: {
      email: email,
      username: username,
      password: password,
    },
    select: {
      email: true,
      username: true,
    },
  });

  console.log("USER CREATED");
  return user;
}

async function getPosts(datasourceUrl: string) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      body: true,
      tags: true,
    },
  });

  return posts;
}

async function getPost(datasourceUrl: string, id: number) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      tags: true,
    },
  });

  return post;
}

async function createPost(datasourceUrl: string, userId: number, title: string, body: string, tags: string[]) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const post = await prisma.post.create({
    data: {
      title: title,
      body: body,
      userId: userId,
      tags: {
        create: tags.map((tag) => ({ name: tag })),
      },
    },
    include: {
      tags: true,
    },
  });

  return post;
}

async function updatePost(datasourceUrl: string, id: number, title: string, body: string, tags: string[]) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const existingPost = await prisma.post.findUnique({
    where: { id: id },
    include: { tags: true },
  });

  if (!existingPost) {
    throw new Error("Post not found");
  }

  const updatedPost = prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      body: body,
      tags: {
        deleteMany: { id: { in: existingPost.tags.map((tag) => tag.id) } },
        create: tags.map((tag) => ({ name: tag })),
      },
    },
    include: {
      tags: true,
    },
  });

  return updatedPost;
}

async function getPostAuthor(datasourceUrl: string, id: number) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const userId = prisma.post.findUnique({
    where: {
      id: id,
    },
    select: {
      userId: true,
    },
  });

  return userId;
}

async function deletePost(datasourceUrl: string, postId: number) {
  const prisma = new PrismaClient({ datasourceUrl: datasourceUrl }).$extends(withAccelerate());

  const deleted = prisma.post.delete({
    where: {
      id: postId,
    },
  });

  return deleted;
}

const authMiddleware: MiddlewareHandler = async (c, next) => {
  const token = c.req.header("Authorization");

  if (!token) {
    return c.text("Token Missing.");
  }

  try {
    const decodedPayload = await verify(token, c.env.JWT_SECRET);
    c.set("email", decodedPayload);
  } catch (e) {
    c.text("Please enter valid token.");
  }

  await next();
};

app.get("/", (c) => {
  return c.text("Get /");
});

app.post("/users/signup", async (c) => {
  const body = await c.req.json();
  const result = Signup.safeParse(body);

  if (result.success) {
    const user = await createUser(c.env.DATABASE_URL, body.email, body.username, body.password);
    return c.json(user);
  }

  return c.text("Data validations failed, Please try again with valid input.");
});

app.post("/users/signin", async (c) => {
  const body = await c.req.json();
  const result = Login.safeParse(body);

  if (result.success) {
    const user = await getUser(c.env.DATABASE_URL, body.email);

    if (user && user.password == body.password) {
      const token = await sign(body.email, c.env.JWT_SECRET);
      return c.json({ token });
    }
    return c.text("Invalid Credentials.");
  }
  return c.text("Data validations failed, Please try again with valid input.");
});

app.get("/posts", async (c) => {
  const allPosts = await getPosts(c.env.DATABASE_URL);

  return c.json(allPosts);
});

app.post("/posts", authMiddleware, async (c) => {
  const email = c.get("email");
  const body = await c.req.json();
  const userId = await getUserId(c.env.DATABASE_URL, email);

  if (!userId) {
    return c.text("Auth failure.");
  }

  const result = Post.safeParse(body);

  if (result.success) {
    const post = await createPost(c.env.DATABASE_URL, userId.id, body.title, body.body, body.tags);
    return c.text("Thanks for posting.");
  }
  return c.text("Please send valid data.");
});

app.get("/posts/:id", authMiddleware, async (c) => {
  const postId = c.req.param("id");

  if (postId) {
    const id = parseInt(postId, 10);
    const post = await getPost(c.env.DATABASE_URL, id);
    return c.json(post);
  }
});

app.put("/posts/:id", authMiddleware, async (c) => {
  const currentUserMail = c.get("email");
  const postId = c.req.param("id");
  const body = await c.req.json();

  if (postId) {
    const id = parseInt(postId, 10);
    const postAuthor = await getPostAuthor(c.env.DATABASE_URL, id);
    const currentUser = await getUserId(c.env.DATABASE_URL, currentUserMail);
    if (postAuthor && currentUser && postAuthor.userId == currentUser.id) {
      const post = await updatePost(c.env.DATABASE_URL, id, body.title, body.body, body.tags);
      return c.json(post);
    }
    return c.text("Post not updated. Current user is not the author of the post.");
  }
  return c.text("Invalid post ID.");
});

app.delete("/posts/:id", authMiddleware, async (c) => {
  const currentUserMail = c.get("email");
  const postId = c.req.param("id");

  if (postId) {
    const id = parseInt(postId, 10);
    const postAuthor = await getPostAuthor(c.env.DATABASE_URL, id);
    const currentUser = await getUserId(c.env.DATABASE_URL, currentUserMail);
    if (postAuthor && currentUser && postAuthor.userId == currentUser.id) {
      const deletedPost = await deletePost(c.env.DATABASE_URL, id);
      return c.json("Successfuly deleted post.");
    }
    return c.text("Post not deleted. Invalid post ID or current user is not the author of the post.");
  }
  return c.text("Invalid post ID.");
});

export default app;
