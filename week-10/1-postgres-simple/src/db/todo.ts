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
  const createTodo =
    "INSERT INTO todos (user_Id, title, description) VALUES ($1, $2, $3) RETURNING title, description, done, id";
  const values = [userId, title, description];

  const response = await client.query(createTodo, values);

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
  const updateTodo =
    "UPDATE todos SET done = $1 WHERE id = $2 RETURNING title, description, done, id";
  const values = [true, todoId];

  const response = await client.query(updateTodo, values);

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
  const getTodos = "SELECT * FROM todos WHERE user_id = $1";

  const response = await client.query(getTodos, [userId]);

  return response.rows;
}
