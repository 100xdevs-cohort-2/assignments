import express, { Request, Response, NextFunction } from "express";
import process from "process";

const app = express();
const port: number = 3000;
let requests: number = 0;

app.use((req: Request, res: Response, next: NextFunction) => {
  const start: number = Date.now();
  res.on("finish", () => {
    console.log(`Request to ${req.path} took ${Date.now() - start} ms`);
  });
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  requests++;
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(`Footfall: ${requests}`);
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("HNJI HNJI");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
