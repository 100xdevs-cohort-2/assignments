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
  try{
    const result = await client.query(
        'INSERT INTO todos (user_id, title, description, done) VALUES ($1, $2, $3, $4) RETURNING *',
        [userId, title, description, false]
    );

    return result.rows[0];

  } catch (error){
    console.error('Error in creating todo', error);
    throw error;
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
    try{
        const result = await client.query(
            'UPDATE todos SET done = true WHERE id = $1 RETURNING *',
            [todoId]
        );

        return result.rows[0];
      
    } catch(error) {
        console.error('Error in updating todo', error);
        throw error;
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
    try{
        const result = await client.query(
            'SELECT * FROM todos WHERE id = $1',
            [userId]
        );

        return result.rows;
    } catch(error) {
        console.error('Error in getting todos', error);
        throw error;
    }
}