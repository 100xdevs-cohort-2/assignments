const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config();
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

var requestCount = 0;
app.use((req, res, next)=>{
    requestCount++;
    console.log(`Request Count : ${requestCount}`);
    next();
})

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
