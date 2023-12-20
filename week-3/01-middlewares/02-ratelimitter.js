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

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
  const userId = req.headers['user-id'];

  if (!userId) {
      return next();
  }

  const currentTime = Date.now();

  if (!numberOfRequestsForUser[userId]) {
      numberOfRequestsForUser[userId] = {
          count: 1,
          startTime: currentTime
      };
      return next();
  }

  const userRequests = numberOfRequestsForUser[userId];

  if (currentTime - userRequests.startTime >= 1000) {
      // Reset count for a new second
      userRequests.count = 1;
      userRequests.startTime = currentTime;
  } else {
      // Increment count if within the same second
      userRequests.count++;

      if (userRequests.count > 5) {
          return res.status(404).json({ message: 'You have exceeded 5 requests per second' });
      }
  }

  return next();
});



app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000, console.log("Listening on port 3000"));

module.exports = app;