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

app.use((req, res, next) => {
  try {
    const userId = req.headers["user-id"];

    // If user-id is not provided, proceed with the request
    if (!userId) {
      next();
      return;
    }

    // Initialize the count for the user if not present
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] || 0;

    // Increment the count for the user
    numberOfRequestsForUser[userId]++;

    // If the user exceeds the limit (5 requests per second), block with 404
    if (numberOfRequestsForUser[userId] > 5) {
      return res.status(404).json({ error: "Rate limit exceeded" });
    }

    // Continue with the request
    next();
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

module.exports = app;
