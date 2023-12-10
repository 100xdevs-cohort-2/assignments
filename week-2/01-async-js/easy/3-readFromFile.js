import fs from "fs";

fs.readFile("./sample.txt", "utf-8", (err, data) => {
  console.log(data);
});
