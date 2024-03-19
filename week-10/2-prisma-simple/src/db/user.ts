import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type User = {
  id: number;
  username: string;
  password: string;
  name: string;
};

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   id: number,
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string): Promise<User> {
  const res = await prisma.user.create({
    data: {
      username: username,
      password: password,
      name: name,
    },
    select: {
      id: true,
      username: true,
      password: true,
      name: true,
    },
  });

  return res;
}

/*
 * Should return the User object
 * {
 *   id: number,
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number): Promise<User> {
  const res = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      username: true,
      password: true,
      name: true,
    },
  });

  if (!res) {
    throw new Error(`User with ID ${userId} not found`);
  }

  return res;
}
