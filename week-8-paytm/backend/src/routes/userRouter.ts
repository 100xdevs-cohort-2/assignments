import { Router } from "express";
import {
  login,
  logout,
  searchBulk,
  signup,
} from "../controllers/userController";
export const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.post("/logout", logout);

userRouter.get("/bulk", searchBulk);
