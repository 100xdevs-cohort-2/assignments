import mongoose from "mongoose";

interface IUserSchema {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUserSchema>(
  {
    firstName: {
      type: String,
      required: true,
      true: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
