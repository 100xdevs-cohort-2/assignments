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
  // await client.connect();

  const inserUser =
    "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING username, password, name";
  const values = [username, password, name];

  let response = await client.query(inserUser, values);

  // console.log("createUser", response.rows[0]);
  return response.rows[0];
}

// createUser("test2@gmail.com", "test123", "test");
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {

  const getUser =
    "SELECT * FROM users WHERE id = $1";
  const values = [userId];

  const response = await client.query(getUser, values);

  // console.log("getUser", response.rows[0]);
  return response.rows[0];
}

// getUser(1);