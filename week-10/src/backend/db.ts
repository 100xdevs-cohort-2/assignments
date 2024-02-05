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

async function deleteUser() {
    
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

async function getUser() {
    
}

async function insertTodo() {
    
}

async function deleteTodo() {
    
}

async function updateTodo() {
    
}

async function getTodo() {
    
}



