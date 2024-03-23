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
        data:{
            name: name,
            password: password,
            username: username,
        }
    });
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
        where:{
            id: userId,
        }
    });
    return res;
}
