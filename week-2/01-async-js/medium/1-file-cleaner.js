const fs = require("fs");
const path = require("path");

const fileName = "1-file-cleaner.txt";
const filePath = path.join(__dirname, fileName);

function cleanFileData(filePath, encoding = "utf-8") {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      console.error(`Error reading the file: ${err}`);
      return;
    }

    data = data.replace(/\s+/g, " ").trim();
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
      }
      console.log("The file has been saved!");
    });
  });
}

cleanFileData(filePath);
