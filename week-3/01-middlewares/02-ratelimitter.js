const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

const requestLimit = 5;
let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

function rateLimitter(req, res, next) {
    const user = req.headers["user-id"];
  
    if (!numberOfRequestsForUser[user]) {
      numberOfRequestsForUser[user] = 1;
      next();
    }
    if (numberOfRequestsForUser[user] > 5) {
      res.status(404).send("404");
    } else {
      ++numberOfRequestsForUser[user];
      next();
    }
  }
  
  app.use(rateLimitter);

app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
