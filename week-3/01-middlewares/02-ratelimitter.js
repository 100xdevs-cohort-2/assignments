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

let numberOfRequestsForUser = 0;
setInterval(() => {
    numberOfRequestsForUser = 0;
}, 1000)

function rate(req,res,next){
  if(numberOfRequestsForUser < 5)
  {
    numberOfRequestsForUser += 1
    next()
  }
  else
  {
    res.status(404).send("sorry u requested too many times")
  }
}

app.use(rate)

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;