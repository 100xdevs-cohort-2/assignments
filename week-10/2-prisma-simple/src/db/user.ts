import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  const user = await prisma.user.create({
    data: {
      username,
      password,
      name,
    },
    select: {
      username: true,
      password: true,
      name: true,
      id: true
    },
  });

  return user;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    return user;
}
