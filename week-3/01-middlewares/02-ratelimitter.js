const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
app.use(rateLimit);

let numberOfRequestsForUser = {};
function startTimer(next) {
  setInterval(() => {
    numberOfRequestsForUser = {};
    next();
  }, 1000)
}

function rateLimit(req, res, next) {
  const userId = req.headers["user-id"];
  const newLimit = 5;
  if(Object.entries(numberOfRequestsForUser).length==0){
    numberOfRequestsForUser["userID"]=userId;
    numberOfRequestsForUser["limit"]=newLimit;
    startTimer(next);
  }else{
    if(numberOfRequestsForUser["limit"]<=1){
      res.status(404).send();
      return;
    }else{
      const countRem = numberOfRequestsForUser["limit"]-1;
      numberOfRequestsForUser["limit"]=countRem;
    }
  }
}

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;