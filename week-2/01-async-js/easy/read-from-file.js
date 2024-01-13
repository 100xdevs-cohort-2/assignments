const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./a.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
