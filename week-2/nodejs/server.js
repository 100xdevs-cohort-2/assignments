import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.listen(port);

app.get("/", (req, res) => {
  res.send("<h1> Hello from server <h1>");
});

app.get("/query", (req, res) => {
  const query = req.query;
  res.send(query);
});

app.get("/health", (req, res) => {
  res.send({ status: "I am healthy!" });
});
