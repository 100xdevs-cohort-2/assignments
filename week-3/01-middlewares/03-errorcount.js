const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// Creating a global catch middleware for error handling
// Any time an exception rises in an any route, the middleware will get called and increment the errorCount Variable
// Send the Response to the user with Status Code of 404.

app.use(function(err,req,res,next) {
  errorCount++;
  res.status(404).json({
    msg: "An exception Occured!",
  })
})

module.exports = app;