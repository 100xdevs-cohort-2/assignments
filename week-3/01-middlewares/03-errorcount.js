const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

function errorCountTracker(error, req, res, next) {
  errorCount++;

  if (error) {
    return res.status(404).send('Exception has occurred');
  } else {
    next();
  }
}

app.get('/user', function (req, res, next) {
  try {
    throw new Error('User not found');
    res.status(200).json({ name: 'john' });
  } catch (err) {
    next(err);
  }
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function (req, res) {
  res.status(200).json({ errorCount });
});

app.use(errorCountTracker);

module.exports = app;
