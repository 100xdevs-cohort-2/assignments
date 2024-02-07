import { PrismaClient } from '@prisma/client';

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
export async function createUser(username: string, password: string, name: string) {
    const res = await prisma.user.create({
        data :{
            username,
            password,
            name
        }
    })
    console.log(res);
    return res;
    
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
    const res = await prisma.user.findFirst({
        where :{
            id : userId
        }
    })

    console.log(res);
    return res;
}
