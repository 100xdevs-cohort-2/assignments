const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./a.txt");

fs.writeFile(filePath, "\ncontent from the code", { flag: "a+" }, (err) => {
  if (err) {
    console.error(err);
  }
});
