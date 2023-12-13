const fs = require("fs");

const readFile = (filePath) => {
  if (!filePath) throw new Error("Required file path is missing");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw new Error("Error reading the file");
    console.log("read file data", data);
  });
};

readFile("./3-read-from-file.md");
