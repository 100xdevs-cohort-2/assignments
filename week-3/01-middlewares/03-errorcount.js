const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let errorCount = 0;

// Middleware function to handle errors
function errorCountFun(err, req, res, next) {
  if (err) {
    errorCount++;
    return res.status(404).send();
  }
  next();
}

app.get("/user", function (req, res) {
  throw new Error("User not found");
  res.status(404).json({ error: "User not found" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});

app.use(errorCountFun);
module.exports = app;
