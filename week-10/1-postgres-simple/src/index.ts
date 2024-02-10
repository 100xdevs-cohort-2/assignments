import { Client } from "pg";

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "pass123",
  port: 5432,
});
