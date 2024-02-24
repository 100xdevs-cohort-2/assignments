import { Router } from "express";
import {
  login,
  logout,
  searchBulk,
  signup,
} from "../controllers/userController";
import { verifyToken } from "../middlewares/verifyToken";
export const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.post("/logout", logout);

userRouter.get("/bulk", verifyToken, searchBulk);
