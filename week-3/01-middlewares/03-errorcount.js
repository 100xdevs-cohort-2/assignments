const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

app.get('/user', function(req, res, next) {
  try {
    // Simulate an error
    throw new Error("User not found");
    // If no error, send a successful response
    res.status(200).json({ name: 'john' });
  } catch (error) {
    // Pass the error to the error-handling middleware
    next(error);
  }
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  errorCount++; // Increment error count
  res.status(404).json({ error: "An error occurred" });
});

module.exports = app;
