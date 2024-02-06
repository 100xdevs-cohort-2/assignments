const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const { connectDB } = require("./db");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
