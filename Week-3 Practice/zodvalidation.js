"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number(),
    email: zod_1.z.string().email(),
});
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};
userSchema.parse(user); // Validates 'user' against the schema
