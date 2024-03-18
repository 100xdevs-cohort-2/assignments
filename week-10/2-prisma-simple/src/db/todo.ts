import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const res = await prisma.todo.create({
        data:{
            title:title,
            description:description,
            done:false,
            userId:userId
        },select:{
            title:true,
            description:true,
            done:true,
            id:true
        }  
    })
    console.log(res);
    return res;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const res = await prisma.todo.update({
        where:{
            id:todoId
        },
        data:{
            done:true
        },
        select:{
            title:true,
            description:true,
            done:true,
            id:true
        }
    })
    console.log(res);
    return res;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const res = await prisma.todo.findMany({
        where:{
            userId:userId
        },
        select:{
            title:true,
            description:true,
            done:true,
            id:true,
            userId:true
        }
    })
    return res;
}