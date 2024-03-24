import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function dropTables() {
    await prisma.todo.deleteMany({});
    await prisma.user.deleteMany({});
}

module.exports = { dropTables };
