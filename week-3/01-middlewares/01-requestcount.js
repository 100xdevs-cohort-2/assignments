const request = require("supertest");
const assert = require("assert");
const express = require("express");
const { error } = require("console");

const app = express();
let requestCount = 0;

app.use((req, res, next) => {
  requestCount++;
  // console.log(`Request Count : ` + requestCount);
  next();
});

//TODO
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000, () => {
  console.log("App running on port 3000 !");
});

module.exports = app;
