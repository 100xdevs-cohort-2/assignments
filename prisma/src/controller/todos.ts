import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()



async function createTodo(userId:number,title:string,description:string) {
    const todo=await prisma.todo.create({
        data:{
            title,
            description,
            userId
        }
    })
    console.log(todo)
}
createTodo(1,"problem solving","maths")

async function getTodos(userId:number) {
    const todo=await prisma.todo.findMany({
        where:{
            userId:userId
        }
    })
    console.log(todo);
}
getTodos(1);

async function getUserTodos(userId:number) {
    const todos=await prisma.todo.findMany({
        where:{
            userId:userId
        },
        select:{
            title:true,
            description:true
        }
    })
    console.log(todos)
}
getUserTodos(1);