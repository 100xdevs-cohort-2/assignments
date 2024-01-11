const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use(express.json());
app.use(cors());
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(3000, console.log("Backend running on port: 3000"));
