import { Client } from 'pg'
import { DB_URL } from './config';
import { createTables } from './db/setup';
import { createUser, getUser } from './db/user';
import { createTodo, getTodos, updateTodo } from './db/todo';

export const client = new Client({
    connectionString: DB_URL
});

// async function main() {
//     try {
//         await client.connect();
//         await createTables();

//         // await createUser("sathishbhat", "894567", "Sathish Bhat");
//         await getUser(4);
//         // await createTodo(1, "finish assignment", "postgres assignment");
//         // await updateTodo(1);
//         await getTodos(1);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         await client.end();
//     }
// }

// main();
