const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
<<<<<<< HEAD
const PORT=3000;
=======

>>>>>>> origin/master
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

<<<<<<< HEAD
app.listen(3000, () => {
=======
const PORT = 3000;

app.listen(PORT, () => {
>>>>>>> origin/master
    console.log(`Server is running on port ${PORT}`);
});
