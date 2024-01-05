const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const connectDb = require("./db/index.js");
const mongoose = require("mongoose");
const app = express();

// Middleware for parsing request bodies
// mongoose
//   .connect(
//     "mongodb+srv://karthickbharathi15:NlFi7VbGyAW5Mdg1@cluster0.twe85bb.mongodb.net/"
//   )
//   .then(() => {
//     console.log("mongodb connected");
//   });
connectDb();

<<<<<<< HEAD
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
>>>>>>> 0613fda64c4a2f848957dda51d6502d20d903c7c
});
