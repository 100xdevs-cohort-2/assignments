import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Todo = {
  id: number;
  userId?: number;
  title: string;
  description: string | null;
  done: boolean;
};

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  id: number,
 *  title: string,
 *  description: string,
 *  done: boolean
 * }
 */
export async function createTodo(userId: number, title: string, description: string): Promise<Todo> {
  const res = await prisma.todo.create({
    data: {
      userId: userId,
      title: title,
      description: description,
      done: false,
    },
    select: {
      id: true,
      title: true,
      description: true,
      done: true,
    },
  });

  return res;
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  id: number,
 *  title: string,
 *  description: string,
 *  done: boolean
 * }
 */
export async function updateTodo(todoId: number): Promise<Todo> {
  const res = await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      done: true,
    },
    select: {
      id: true,
      title: true,
      description: true,
      done: true,
    },
  });

  return res;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  id: number,
 *  title: string,
 *  description: string,
 *  done: boolean
 * }]
 */
export async function getTodos(userId: number): Promise<[Todo]> {
  const res = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      userId: true,
      title: true,
      description: true,
      done: true,
    },
  });

  return res as [Todo];
}
