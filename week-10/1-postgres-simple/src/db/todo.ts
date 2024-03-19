import { client } from "..";

type Todo = {
  id: number;
  user_id: number;
  title: string;
  description: string;
  done: boolean;
};

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  id: number,
 *  user_id: number,
 *  title: string,
 *  description: string,
 *  done: boolean
 * }
 */
export async function createTodo(userId: number, title: string, description: string): Promise<Todo> {
  const query = `INSERT INTO todos (user_id, title, description) 
                 VALUES ($1, $2, $3)
                 RETURNING *`;
  const values = [userId, title, description];
  const res = await client.query(query, values);
  return res.rows[0];
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  id: number,
 *  user_id: number,
 *  title: string,
 *  description: string,
 *  done: boolean
 * }
 */
export async function updateTodo(todoId: number): Promise<Todo> {
  const query = `UPDATE todos 
                 SET done=true 
                 WHERE id=$1 
                 RETURNING *`;
  const values = [todoId];
  const res = await client.query(query, values);
  return res.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  id: number,
 *  user_id: number,
 *  title: string,
 *  description: string,
 *  done: boolean,
 * }]
 */
export async function getTodos(userId: number): Promise<[Todo]> {
  const query = `SELECT * 
                 FROM todos
                 WHERE user_id=$1`;
  const values = [userId];
  const res = await client.query(query, values);
  return res.rows as [Todo];
}
