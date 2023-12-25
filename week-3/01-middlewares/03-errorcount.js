const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

const errorHandler = (error, req, res, next) => {
  errorCount++;
  res.status(404).send("This is not you, this is us. Fixing the issue");
};
app.get("/user", function (req, res, next) {
  try {
    throw new Error("User not found");
  } catch (error) {
    next(error);
  }
  res.status(200).json({ name: "john" });
});
app.use(errorHandler);

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});
app.listen(300, () => {
  console.log("Server started");
});

module.exports = app;
