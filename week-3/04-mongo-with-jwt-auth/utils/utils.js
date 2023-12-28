
const { z } = require("zod");
const Jwt = require("jsonwebtoken");

const adminSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
  email: z.string().email(),
  name: z.string(),
});

const courseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  imageLink: z.string(),
  published: z.boolean(),
});

const JwtSecret = process.env.JWT_SECRET || "defaultSecret";

const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(6)
})

const userSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
    email: z.string().email(),
    name: z.string(),
});

 function validateToken(req, res, next) {
    if (!req.headers['authorization']) {
        
        return res.status(403).send("Please provide Authorization header");
    }
    const token = req.headers['authorization'].split(' ')[1];
    try{
        Jwt.verify(token, JwtSecret);
        next();
    }
    catch(err) {
        return res.status(403).send("Invalid token");
    }
 }

module.exports = {
  Jwt,
  adminSchema,
  courseSchema,
  loginSchema,
  userSchema,
  JwtSecret,
  validateToken
}