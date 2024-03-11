import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export interface AuthRequest extends Request {
  _id?: string;
}

export const verifyToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  try {
    if (!token) {
      return res.status(401).send({ message: "You are Unauthorized" });
    }
    jwt.verify(
      token,
      process.env.JWT_KEY!,
      (err: JsonWebTokenError | null, data: any) => {
        if (err) {
          return res.status(401).send({ message: "You are Unauthorized" });
        }
        req._id = data._id;
        next();
      }
    );
  } catch (error) {
    return res.status(500).send({ message: "Something went wrong!" });
  }
};
