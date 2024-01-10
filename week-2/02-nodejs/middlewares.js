const express = require("express");
const app = express();

//Middleware for user authentication
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "guddu" || password != "guddu") {
    res.status(403).send("Invalid username or password");
  } else {
    next();
  }
}

//Middleware for kidney input validation
function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.json({
      msg: "Wrong input",
    });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.json({
      msg: "Your Kidney is healthy",
    });
  }
);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
