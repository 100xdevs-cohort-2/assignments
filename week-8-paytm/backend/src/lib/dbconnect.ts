import mongoose from "mongoose";

export const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "paytm-test",
    });
    console.log("Connected to Paytm DB!");
  } catch (error) {
    console.error(error);
  }
};
