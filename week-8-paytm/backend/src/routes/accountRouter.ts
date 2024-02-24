import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import { getBalance, transferMoney } from "../controllers/accountController";

export const accountRouter = Router();

accountRouter.get("/balance", verifyToken, getBalance);
accountRouter.post("/transfer", verifyToken, transferMoney);
