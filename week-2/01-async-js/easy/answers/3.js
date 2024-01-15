const fs = require("fs");
const path = "./sample.txt";
fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
