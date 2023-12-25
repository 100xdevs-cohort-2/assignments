const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mr_krishna:krishna123@cluster0.8b5qh0s.mongodb.net/").then(() => console.log("Connected to Databases"));
app.use(express.json());
app.use(bodyParser.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
