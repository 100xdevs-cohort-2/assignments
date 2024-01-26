const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const AdminRouter = require("./routes/admin");

//Prefixing Routes
app.use(bodyParser.json());
app.use("/admin", AdminRouter);
const port = 3000;
app.listen(port, () => {
  console.log("Server is running at port 3000");
});
