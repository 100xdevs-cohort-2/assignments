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

// let numberOfRequestsForUser = {};
// setInterval(() => {
//     numberOfRequestsForUser = {};
//     let max_request = 5;
//     let countRequest = 0;
//    //loop, countofrequest++, if(countofrequest<max_request){return user_id.auth.haeder} else {block 404}
//    for(let i=1; i<=max_request; i++){
//     countRequest++
//    }
// }, 1000)

const MAX_REQUESTS_PER_SECOND = 5;
const requestsPerUser = {};

app.use((req, res, next) => {
  const userId = req.headers.userId;

  if (!userId) {
    return res.status(400).json({ error: 'User ID missing' });
  }

  if (!requestsPerUser[userId]) {
    requestsPerUser[userId] = 1;
  } else {
    requestsPerUser[userId]++;
  }

  if (requestsPerUser[userId] > MAX_REQUESTS_PER_SECOND) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  setTimeout(() => {
    requestsPerUser[userId] = 0;
  }, 1000);

  next();
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;