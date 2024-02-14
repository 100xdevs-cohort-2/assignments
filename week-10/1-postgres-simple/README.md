# Simple SQL queries practise.

In this assignment, you'll be writing a bunch of SQL queries to interact with your postgres database.

## Pre-requisites
Before you start, please grab a Postgres URL from either of the following - 
 - https://neon.tech/
 - https://aiven.io/

and put it in config.ts

## Assignment
You are supposed to write the `database` part of an full stack app. 
Specifically, you need to fill the functions in 
 - src/db/user.ts
 - src/db/todo.ts

## Testing
Run `npm run test` to run all the tests

## Call out
The schema of the tables looks like this - 
```
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        title VARCHAR(255) NOT NULL,
        description TEXT,
        done BOOLEAN DEFAULT false
    );
```