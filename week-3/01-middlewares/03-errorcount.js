const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

<<<<<<< HEAD

=======
>>>>>>> origin/master
app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});
<<<<<<< HEAD
=======

>>>>>>> origin/master
app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

<<<<<<< HEAD

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(404).json({ message: 'Not Found' });
  errorCount++;
});


=======
>>>>>>> origin/master
module.exports = app;