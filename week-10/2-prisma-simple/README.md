## Prisma Assignment
Same as the last assignment, but you need to use `prisma` as the ORM.

## Pre-requisites
1. Checkout `prisma/schema.prisma` and see the initial schema that has been created.
2. Replace `db.url` with your database URL.
3. Run the following commands to migrate your database - 
```js
    npx prisma migrate dev
    npx prisma generate
```

## Assignment
You need to fill the db/user.ts and db/todos.ts using the `prisma` client to put in the data

## Testing
Run `npm run test` to run all the tests
