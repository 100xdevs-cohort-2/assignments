import { client } from "..";
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
    const response = await client.query(`
        INSERT INTO "todos" (title , description , done , user_id)
        VALUES($1 , $2 , $3 , $4)
        RETURNING *;
    `,[title , description , false , userId]);
    return response.rows[0];
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
    const response = await client.query(`
        UPDATE "todos"
        SET done = true
        WHERE id = $1
        RETURNING *;
        `, [todoId]);
    return response.rows[0];
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
    const response = await client.query(`
        SELECT title , description , done , id, user_id  FROM "todos" 
        WHERE user_id = $1 ;   
        `,[userId]
    );
    return response.rows
}