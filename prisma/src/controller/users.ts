import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()
import { Request,Response } from "express"

export async function insertUser(req:Request,Res:Response) {
    const {email,password,firstName,lastName}=req.body;
    const user=await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            password:true
        }
    })
    Res.status(201).json(user);
    console.log(user)
}


interface updateParams{
    firstName:string,
    lastName:string
}

export async function updateUser(username:string ,{
    firstName,
    lastName
}:updateParams){
    const res=await prisma.user.update({
        where:{email:username},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res)
}

export async function getUser(req:Request,Res:Response) {
    const {email}=req.body
    const user=await prisma.user.findFirst({
        where:{
            email,
        }
    })
    
    if (user) {
        Res.status(200).json(user);
      } else {
        Res.status(404).json({ error: 'User not found' });
      }
}
