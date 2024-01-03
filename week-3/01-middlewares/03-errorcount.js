const express = require('express');
const app = express();
let errorCount = 0;

// Global error handler middleware
app.use(function(err, req, res, next) {
  errorCount++;
  res.status(404).json({
    msg: "Not Found"
  });
});

app.get('/user', function(req, res, next) {
  try {
    throw new Error("User not found");
  } catch (error) {
    // Increment errorCount before passing the error to the global error handler middleware
    errorCount++;
    next(error);
    return; // Stop execution to prevent sending a 200 response
  }

  // The following code will not be executed if an error occurs
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res, next) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res, next) {
  res.status(200).json({ errorCount });
});

module.exports = app;
