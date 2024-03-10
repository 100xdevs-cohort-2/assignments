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
    
    const inserUser =
    "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING username, password, name";
  const values = [username, password, name];

  let response = await client.query(inserUser, values);

  // console.log("createUser", response.rows[0]);
  return response.rows[0];
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
    
    const query = "SELECT * FROM users WHERE id = $1"
    const values = [userId]
    const result = await  client.query(query,values)
   
        return result.rows[0]; // Return the first row 


}
