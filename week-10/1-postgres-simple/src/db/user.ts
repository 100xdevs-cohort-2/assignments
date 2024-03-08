import { client } from "..";

type User = {
  id: number;
  username: string;
  password: string;
  name: string;
};

/*
 * Should insert into the users table
 * Returns void
 */
export async function createUser(username: string, password: string, name: string): Promise<void> {
  const query = `INSERT INTO users (username, password, name) 
                 VALUES ($1, $2, $3)`;
  const values = [username, password, name];
  await client.query(query, values);
}

/*
 * Should return the User object
 * {
 *   id: number,
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number): Promise<User> {
  const query = `SELECT * 
                 FROM users 
                 WHERE id=$1`;
  const values = [userId];
  const res = await client.query(query, values);
  return res.rows[0];
}
