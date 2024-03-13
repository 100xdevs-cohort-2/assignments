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
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const insertQuery = `INSERT INTO todos(user_id,title,description) 
    VALUES ($1, $2 , $3)
     RETURNING *`;
    const values = [userId, title, description];
    const result = await client.query(insertQuery, values);
    return result.rows[0];
  } catch (err) {
    console.error(err);
    return;
  }
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
  try {
    const getTodo = `UPDATE todos SET done = true WHERE id = $1 RETURNING id,title,description,done `;
    const id = [todoId];
    const result = await client.query(getTodo, id);
    return result.rows[0];
  } catch (err) {
    console.error(err);
    return;
  }
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
  try {
    const getQuery = `select * from todos 
          where user_id=$1`;
    const id = [userId];
    const result = await client.query(getQuery, id);
    return result.rows;
  } catch (err) {
    console.error(err);
    return;
  }
}
