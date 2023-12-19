import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import zod from "zod";
import mongoose from "mongoose";

const app = express();
const port: number = 3000;
const secretKey: string = "Your_SECRET_Key";

mongoose.connect(
  "mongodb+srv://arnav:arnavsharma1A@cluster0.n9borfi.mongodb.net/user_app",
);

const Users = mongoose.model("users", {
  username: String,
  password: String,
});

function validate(user) {
  const schema = zod.object({
    username: zod.string(),
    password: zod.string().min(8),
  });
  const res = schema.safeParse(user);
  return res;
}

function aurhenticateUser(req: Request, res: Response, next: NextFunction) {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(400).json("Invalid Credentials");
  jwt.verify(token, secretKey, (err, decoded: string) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = decoded;
    next();
  });
}

app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  const { user } = req.body;
  const valid = validate(user);
  console.log(valid);
  if (!valid.success) {
    res.status(401).json("Invalid Credentials");
    return;
  }
  const existingUser = await Users.findOne({ username: user.username });
  if (existingUser) {
    res.status(400).json("Username already exists");
    return;
  }
  const userCreate = new Users(user);
  await userCreate.save();
  res.status(200).json("User Created");
});

app.post("/login", async (req: Request, res: Response) => {
  const { user } = req.body;
  const valid = validate(user);
  if (valid.success) {
    const existingUser = await Users.findOne({ username: user.username });
    if (!existingUser) return res.status(400).json("Username dose not exist");
    if (existingUser.password !== user.password) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    const token: string | undefined = jwt.sign(user.username, secretKey);
    res.status(200).send(token);
  }
});

app.get("/users", aurhenticateUser, async (req: Request, res: Response) => {
  const decoded = req.user;
  try {
    const displayed = await Users.find({ username: { $ne: decoded } });
    res.status(200).json({ users: displayed.map((user) => user.username) });
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`App Listning on port ${port}`);
});
