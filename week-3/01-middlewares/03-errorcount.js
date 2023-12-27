const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get("/user", function (req, res) {
  // Simulate an error by throwing it synchronously
  throw new Error("User not found");
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});
app.use((err, req, res, next) => {
  errorCount++;

  res.status(404).json({ error: "Not Found" });
});

module.exports = app;

// app.get("/user", function (req, res) {
//   // Simulate an error by throwing it synchronously
//   throw new Error("User not found");
// });

// app.post("/user", function (req, res) {
//   res.status(200).json({ msg: "created dummy user" });
// });

// app.get("/errorCount", function (req, res) {
//   res.status(200).json({ errorCount });
// });

// // Global error-handling middleware
// app.use((err, req, res, next) => {
//   // Increment the errorCount
//   errorCount++;

//   // Log the error (optional)
//   console.error(err);

//   // Set the status code and send a JSON response
//   res.status(404).json({ error: "Not Found" });
// });
