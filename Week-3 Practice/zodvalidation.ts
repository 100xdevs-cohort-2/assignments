import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

const user = {
  name: "Alice",
  age: "23",
  email: "alicexample.com"
};

userSchema.parse(user); // Validates 'user' against the schema
