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
    try {
        // await client.connect(); // Ensure client connection is established
        // Use parameterized query to prevent SQL injection
        const insertQuery = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING username,password,name ";
        const values = [username, password, name];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res); // Output insertion result
        return res.rows[0]
      } catch (err) {
        console.error('Error during the insertion:', err);
      } 
      // finally {
      //   await client.end(); // Close the client connection
      // }
      
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
    try{
      const query = 'SELECT * FROM users WHERE id = $1';
      const values = [userId];
      const result = await client.query(query, values);
      return result.rows[0];
    } catch(err){
        console.error('Error during get:', err);
    } 
    // finally{
    //     await client.end();
    // }
}
