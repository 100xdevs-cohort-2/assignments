import express from "express";
import { dbconnect } from "./lib/dbconnect";
import { config } from "dotenv";
import { mainRouter } from "./routes/mainRouter";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://192.168.1.2:5173"],
  })
);
config();

app.use("/api/v1", mainRouter);

dbconnect();
app.listen(4000, () => {
  console.log("http://localhost:4000");
});
