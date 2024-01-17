const express = require("express");
const app = express();

app.use(express.json());

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age > 18) {
    next();
  } else {
    res.json({
      message: "Sorry, you are young for this",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    message: "You have done ride 1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  res.json({
    message: "You have done ride 2",
  });
});

app.use((err, req, res, next) => {
  res.status(404).json({
    message: "Something went wrong!",
  });
});

app.listen(3000);
