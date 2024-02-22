import { Router } from "express";
import { userRouter } from "./userRouter";

export const mainRouter = Router();

mainRouter.use("/user", userRouter);
