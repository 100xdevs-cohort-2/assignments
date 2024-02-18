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
        const InsertQuery = "INSERT INTO todos (user_id,title,description) values ($1,$2,$3) RETURNING title, description, done ,id"
        const res = await client.query(InsertQuery,[userId,title,description])
        if (res.rows && res.rows.length > 0) {
            return res.rows[0]; // Return the first row of the result
        } else {
            throw new Error('User insertion failed'); // Throw an error if no rows were returned
        }
    }catch(e){
        console.log("")
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
     const updateQuery = "UPDATE todos SET done = true WHERE id = ($1) RETURNING title,description,done,id";

     const res = await client.query(updateQuery,[todoId])

     if (res.rows && res.rows.length > 0) {
        return res.rows[0]; // Return the first row of the result
    } else {
        throw new Error('User updation failed'); // Throw an error if no rows were returned
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
    const allQuery = "SELECT * FROM todos WHERE user_id = ($1)"

    const res = await client.query(allQuery,[userId])

    if (res.rows && res.rows.length > 0) {
        return res.rows; // Return the first row of the result
    } else {
        throw new Error('User not have todos'); // Throw an error if no rows were returned
    }

}