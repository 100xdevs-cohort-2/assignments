// index.js
const { seedUsers } = require('./seed');

const readUsers = async () => {
  const { Client } = require('pg');
  const connectionString = process.env.DB_CONNECTION_STRING;
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();

    /*You are given a Database, which has a table named users and User Information is already seeded in the table. 
    You dont know any thing about the User Information. You just know that it has a field id 
    You have to write a SQL query (SQL Injection using id) to read the data from the table and log it to the console.
    For Example: 
    SELECT * FROM Users WHERE UserId = 105 OR 1=1;
    The SQL above is valid and will return ALL rows from the "Users" table, since OR 1=1 is always TRUE.
    */

    const query = "/*PLEASE ENTER YOUR QUERY HERE */"
    const result = await client.query(query);
    const users = result.rows;
    console.log('Retrieved users:', users);
  } catch (error) {
    console.error('Error reading users:', error);
  } finally {
    await client.end();
  }
};

seedUsers();

readUsers();
