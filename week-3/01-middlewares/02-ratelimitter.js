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
let num;
setInterval(() => {
  numberOfRequestsForUser = {};
  num = 0;
}, 5000);

app.use((req, res, next) => {
  let user = req.headers.userId;
  if (numberOfRequestsForUser[user]) {
    numberOfRequestsForUser[user]++;
    num++;
    if (numberOfRequestsForUser[user] > 5) {
      res.status(404).send("no entry");
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[user] = 1;
    num = 1;
    next();
  }
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: `called ${num} times`});
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.listen(3000);

module.exports = app;
