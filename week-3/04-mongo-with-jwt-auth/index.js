const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const rateLimiter = require('./middleware/rate_limiter');
const { reqLogger, errLogger } = require('./middleware/loggers');
const performChecks = require('./middleware/validator');
const PORT  = 3000;

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(reqLogger);
app.use(rateLimiter);
app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.use(errLogger);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
