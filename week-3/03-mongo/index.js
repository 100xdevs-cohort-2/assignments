const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
