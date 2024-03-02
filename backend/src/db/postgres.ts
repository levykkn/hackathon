import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'hackathon',
  password: 'kukva',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database');

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS your_table_name (
        column1 integer,
        column2 text
      )
    `;

    const insertRowQuery = 'INSERT INTO your_table_name (column1, column2) VALUES ($1, $2)';
    const values = [123, 'some text'];

    client.query(createTableQuery)
      .then(() => {
        console.log('Table created or already exists');

        client.query(insertRowQuery, values)
          .then(() => {
            console.log('Row inserted successfully');
            client.end(); // Close the connection after the operation is complete
          })
          .catch((err) => {
            console.error('Error inserting row:', err);
            client.end(); // Close the connection in case of an error
          });
      })
      .catch((err) => {
        console.error('Error creating table:', err);
        client.end(); // Close the connection in case of an error
      });
  })
  .catch((err) => {
    console.error('Error connecting to the PostgreSQL database:', err);
  });

export default client;