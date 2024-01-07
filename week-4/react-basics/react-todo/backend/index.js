const express = require("express");
const app = express();
const todoRouter = require("./routes/todo");
const userRouter = require("./routes/user");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/todos", todoRouter);
app.use("/user", userRouter);

app.listen(3000, console.log("Server running on port 3000"));
