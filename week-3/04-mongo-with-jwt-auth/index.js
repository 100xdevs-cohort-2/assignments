const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

dotenv.config();
const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Global catch
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong. Please try again.");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
