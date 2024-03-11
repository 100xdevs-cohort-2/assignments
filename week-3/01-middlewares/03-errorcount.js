const express = require('express');

const app = express();
let errorCount = 0;

// Middleware to handle errors globally
app.use((err, req, res, next) => {
  errorCount++; // Increment error count for every error

  // Respond with a 404 status code for any error
  res.status(404).json({ error: 'Not Found' });
});

app.get('/user', function(req, res, next) {
  try {
    throw new Error('User not found');
  } catch (err) {
    // Pass the error to the error handling middleware
    next(err);
  }
  res.status(200).json({ name: 'john' }); // This won't execute due to the previous error
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

module.exports = app;
