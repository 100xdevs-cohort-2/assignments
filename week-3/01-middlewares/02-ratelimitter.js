const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

function rateLimiterMiddleWare(req, res, next) {
  const userName = req.headers["user-id"];
  console.log(numberOfRequestsForUser[userName], req.headers);
  if (numberOfRequestsForUser.hasOwnProperty(userName)) {
    if (numberOfRequestsForUser[userName] <= 5) {
      numberOfRequestsForUser[userName] += 1;
      next();
    } else {
      res.status(404).send({ msg: "blocked" });
    }
  } else {
    numberOfRequestsForUser[userName] = 1;
    next();
  }
}

app.use(rateLimiterMiddleWare);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.listen(3000);
module.exports = app;
