const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const app = express();
app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Server Listening on port 3000");
});
