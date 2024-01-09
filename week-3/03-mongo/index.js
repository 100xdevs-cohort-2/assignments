const { Router } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const PORT = 3000;
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = router;
