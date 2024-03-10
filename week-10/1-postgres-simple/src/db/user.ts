import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try {
        await client.connect()
        const query = "INSERT INTO users(username,password,name) VALUES($1,$2,$3)"
        const values = [username, password, name]
        const result = await client.query(query, values)
        return result
    } catch (error) {
        console.log(error)
    }
    finally {
        await client.end()
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        await client.connect()
        const query = "SELECT* FROM users WHERE userId = $1"
        const result = await client.query(query, [userId])
        return result
    } catch (error) {
        console.log(error)
    }
    finally {
        await client.end()
    }
}
