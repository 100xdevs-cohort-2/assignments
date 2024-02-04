// seed.js
const { Client } = require('pg');

const seedUsers = async () => {
  const connectionString = process.env.DB_CONNECTION_STRING;
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();

    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER NOT NULL,
        name VARCHAR (100) NOT NULL,
        email VARCHAR (100) NOT NULL
      );

      INSERT INTO users (id, name, email) VALUES
        (88, 'John Doe', 'john.doe@example.com'),
        (121, 'Jane Smith', 'jane.smith@example.com');
    `);

    console.log('Users table seeded successfully.');
  } catch (error) {
    console.error('Error seeding users table:', error);
  } finally {
    await client.end();
  }
};

module.exports = {
  seedUsers,
};
