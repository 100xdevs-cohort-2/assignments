const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  // Check if the username and password are correct
  if (!(username === "guddu" && password === "guddu")) {
    res.status(401).send("Invalid username or password");
    return;
  }
  // Check if the kidneyId is correct
  if (kidneyId == 1 || kidneyId == 2) {
    res.json({
      msg: "Your Kidney is healthy",
    });
  } else {
    res.json({
      msg: "Wrong input",
    });
  }
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
