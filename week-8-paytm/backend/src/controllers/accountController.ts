import { Response } from "express";
import { Account } from "../models/Account";
import { AuthRequest } from "../middlewares/verifyToken";
import mongoose from "mongoose";

export const getBalance = async (req: AuthRequest, res: Response) => {
  try {
    const account = await Account.findOne({ userId: req._id });
    if (!account) {
      return res.status(404).send({ message: "Account not found!" });
    }
    return res.status(200).send({ balance: account.balance });
  } catch (error) {
    return res.status(500).send({ message: "Error checking balance" });
  }
};

export const transferMoney = async (req: AuthRequest, res: Response) => {
  const session = await mongoose.startSession();
  try {
    //start a mongoose sesstion and initialize a transaction
    session.startTransaction();

    const { toAccountId, amount } = req.body;
    const myAccount = await Account.findOne({ userId: req._id }).session(
      session
    );

    if (!myAccount || myAccount.balance < amount || amount < 0) {
      //abort transaction if balance is not sufficient
      session.abortTransaction();
      return res.status(422).send({ message: "Insufficient funds!" });
    }

    const toAccount = await Account.findOne({ userId: toAccountId }).session(
      session
    );
    if (!toAccount) {
      //abort transaction if recievers account does not exist
      session.abortTransaction();
      return res.status(422).send({ message: "Reciever's Account not found!" });
    }

    //transferring amount to the accounts and deducting
    await Account.updateOne(
      { userId: req._id },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: toAccountId },
      { $inc: { balance: amount } }
    ).session(session);

    //commit the transaction
    session.commitTransaction();
    return res.status(200).send({
      message: "Funds Transfered successfully!",
    });
  } catch (error) {
    session.abortTransaction();
    return res.status(500).send({ message: "Error transferring money!" });
  }
};
