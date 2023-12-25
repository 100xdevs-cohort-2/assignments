const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const rateLimiter = require('./middleware/rate_limiter');

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.use(reqLogger);
app.use(rateLimiter);
app.use(errLogger);

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
