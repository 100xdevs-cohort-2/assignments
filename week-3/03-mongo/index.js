const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
require('dotenv').config();
const { errorHandler, unknownEnpoint } = require('./utils/middlware');

// Middleware for parsing request bodies
// TODO: HANDLE ERRORS
app.use(bodyParser.json());
app.use('/admin', adminRouter);
app.use('/user', userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`Course Selling Webapp Mocked BE`);
});

app.use(unknownEnpoint);
app.use(errorHandler);
