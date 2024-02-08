import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(name: string, email: string, password: string) {
    const res = await prisma.user.create({
        data: {
            name,
            email,
            password    
        }
    })
    console.log(res);   
}

async function deleteUser(name: string) {
    const res = await prisma.user.delete({
        where: {name: name}
    })
}

interface updateUserParams{
    email: string,
    password: string

}

async function updateUser(name: string, {
    email,
    password
}:updateUserParams) {
    const res = await prisma.user.update({
        where: { name },
        data: {
            email,
            password
        }
    });
    console.log(res);
}

async function getUser(name: string) {
    const res = await prisma.user.findFirst({
        where:{name: name}
    })
    console.log(res)
}

async function insertTodo(title:string,done:boolean ,userId:number) {
    const todo = await prisma.todo.create({
        data: {
            title,
            userId,
            done
        }
    })
    console.log(todo);
}

async function deleteTodo(id : number) {
    const todo = await prisma.todo.delete({
        where: {
            id: id
        }
    })
}

interface updateUserPamas{
    title: string,
    done: boolean
}
async function updateTodo(id:number,{title,done}:updateUserPamas) {
   
    const res = await prisma.todo.update({
        where: {
            id
        },
        data: {
            title,
            done
        }
   })
    
}

async function getTodo(id:number) {
    const res = await prisma.todo.findFirst({
        where: {
            id
        }
    })
}



