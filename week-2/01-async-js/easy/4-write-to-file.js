const fs = require("fs");
const path = require("path");

const fileName = "file.txt";
const filePath = path.join(__dirname, fileName);

function writeToFile(writeData, filePath, encoding = "utf-8") {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      console.error(`Error reading the file: ${err}`);
      return;
    }

    writeData = `${data}\n${writeData}`;
    fs.writeFile(filePath, writeData, (err) => {
      if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
      }
      console.log("The file has been saved!");
    });
  });
}

const writeData = "Hello Hello!";
writeToFile(writeData, filePath);
