import express from "express";
import { dbconnect } from "./lib/dbconnect";
import { config } from "dotenv";
import { mainRouter } from "./routes/mainRouter";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
config();

app.use("/api/v1", mainRouter);

dbconnect();
app.listen(4000, () => {
  console.log("http://localhost:4000");
});
