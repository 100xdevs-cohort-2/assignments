const express = require("express");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const { connectDb } = require("./db");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/", userRouter);

connectDb();
app.listen(process.env.PORT, () => {
  console.log(`Listening to PORT ${process.env.PORT}`);
});

//STILL FEW THINGS LEFT LIKE
//  WE ARE NOT CHECKING THE USER IS SIGNED IN OR NOT
// MANY CHECKS LEFT FOR ADMIN/USERS but for now just leaving it
