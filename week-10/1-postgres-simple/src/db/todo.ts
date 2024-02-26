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

interface Todo {
    id: number;
    title: string;
    description: string;
    done: boolean;
}
export async function createTodo(userId: number, title: string, description: string) {
    try{
        const query = "INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *";
  const values = [userId, title, description];
  const result = await client.query(query, values);
  return result.rows[0];
    } catch(err){
        console.log("Couldn't insert todo:", err)
    }
    //  finally{
    //     await client.end();
    // }
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
    try{
        // await client.connect()
        const updateQuery = "UPDATE todos SET done = true WHERE id = $1 RETURNING id, title, description, done";
        const values = [todoId]
        const res = await client.query(updateQuery,values);
        console.log('Todo inserted successfully:', res); 
        return res.rows[0]
    } catch(err){
        console.log("Couldn't update todo:", err)
    } 
    // finally{
    //     await client.end();
    // }
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
    try{
        // await client.connect();
        const getQuery =  "SELECT * FROM todos WHERE user_id = $1"
        const values = [userId];
        const res = await client.query(getQuery,values);
        console.log('Todo inserted successfully:', res); 
        return res.rows;
    } catch(err){
        console.log("Couldn't insert todo:", err)
    } 
    // finally{
    //     await client.end();
    // }
}