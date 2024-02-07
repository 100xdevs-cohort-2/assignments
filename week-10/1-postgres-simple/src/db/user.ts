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
        //await client.connect(); // Ensure client connection is established
        // Use parameterized query to prevent SQL injection
        const insertQuery = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *";
        const values = [username, password, name];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res.rows[0]); // Output insertion result
        return res.rows[0];
      } catch (err) {
        console.error('Error during the insertion:', err);
      } finally {
        //await client.end(); // Close the client connection
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
    try{
        //await client.connect();
        const inserQuery = "SELECT * FROM users WHERE id=($1)";
        const values = [userId];
        const res = await client.query(inserQuery, values);
        console.log('Select success:', res.rows[0]);
        return res.rows[0];
    }catch(err){
        console.error('Error during fetch:', err);
    }finally{
        //await client.end();
    }
}
