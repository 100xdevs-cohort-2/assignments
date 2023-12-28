import fs from "fs";

const data = fs.readFileSync("./input.txt", "utf-8", (err, data) => data);
data.trim();

const finalData = data
  .split(" ")
  .filter((x) => x !== "")
  .join(" ");
console.log(finalData);
