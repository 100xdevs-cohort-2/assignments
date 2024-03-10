import { client } from "../index";
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
    try {
        await client.connect()
        const query = "INSERT INTO todos(user_id,title,description) VALUES($1,$2,$3)"
        const values = [userId, title, description]
        const result = await client.query(query, values)
        return result
    } catch (error) {
        console.log(error)
    }
    finally {
        client.end()
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
        await client.connect()
        const query = "UPDATE todos SET done = true WHERE id = $1"
        const result = await client.query(query, [todoId])
        return result
    } catch (error) {
        console.log(error)
    }
    finally {
        client.end()
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
        await client.connect()
        const query = "SELECT* FROM todos WHERE user_id = $1"
        const result = await client.query(query, [userId])
        return result
    } catch (error) {
        console.log(error)
    }
    finally {
        client.end()
    }
}