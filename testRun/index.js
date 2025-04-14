const express = require("express");
const fs = require("fs");
const errorHandler = require("./error-handler");
const app = express();

const PORT = 3000;

app.get("/", [
  function (req, res, next) {
    fs.readFile("/maybe-valid-file", "utf-8", (err, data) => {
      res.locals.data = data;
      next(err);
    });
    // res.send("Hello World");
  },
  function (req, res) {
    res.locals.data = res.locals.data.split(",")[1];
    res.send(res.locals.data);
  },
]);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});
