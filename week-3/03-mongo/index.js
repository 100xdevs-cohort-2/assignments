require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;
// console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to db")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
