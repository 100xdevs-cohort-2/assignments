const express = require("express");
const app = express();

let errorCount = 0;

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

// Global error-handling middleware
app.use((err, req, res, next) => {
  // Increment the errorCount
  errorCount++;

  // Log the error (optional)
  console.error(err);

  // Set the status code and send a JSON response
  res.status(404).json({ error: "Not Found" });
});

app.listen(3000);
module.exports = app;
