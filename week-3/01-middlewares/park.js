const express = require("express");
const app = express();
app.use(express.json());
//ticket check
function ticketCheck(req, res, next) {
  const ticket = req.query.ticket;
  if (ticket === "free") {
    next();
  } else {
    res.json({
      msg: "You have no ticket",
    });
  }
}

//get request

app.use(ticketCheck);

app.get("/ride1/", function (req, res) {
  res.json({
    msg: "You can go for ride 1",
  });
});

app.get("/ride2/", function (req, res) {
  res.json({
    msg: "You can go for ride 2",
  });
});

app.listen(3000, function () {
  console.log("listenig at port 3000");
});
