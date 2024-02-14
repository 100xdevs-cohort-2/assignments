import { client } from "..";

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
    const q = `INSERT INTO 
    users (username, password, name)
    VALUES ($1,$2, $3)`
    await client.query(q, [username, password, name]);
    // const data = addUser.rows[0];
    // return data;

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
    const query = `SELECT *
    FROM users
    WHERE id = $1`
    const response = await client.query(query, [userId]);
    const data = response;
    return data.rows[0];
}
