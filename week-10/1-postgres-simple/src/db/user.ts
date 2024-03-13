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
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    const insertQuery = `INSERT INTO users(username,password,name) VALUES ($1,$2, $3 ) RETURNING *`;
    const values = [username, password, name];

    const result = await client.query(insertQuery, values);
    const insertedUser = result.rows[0];
    return insertedUser;
  } catch (err) {
    console.error(err);
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
    const getQuery = `select * from users where id = $1 `;
    const uId = [userId];
    const result = await client.query(getQuery, uId);
    return result.rows[0];
  } catch (err) {
    console.error(err);
  }
}
