const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

mongoose.connect("mongodb+srv://rajpratim:ERdwJ5zcHXIIldTa@cluster0.qil5xnx.mongodb.net/")
mongoose.connection.on('connected', () => console.log("connected"))

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
