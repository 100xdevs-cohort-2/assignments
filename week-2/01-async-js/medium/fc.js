const fs = require("fs");

const filePath = "sample.txt";

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    const modifiedContent = removeExtraSpaces(data);

    writeToFileAsync(filePath, modifiedContent, callback);
  });
}

function removeExtraSpaces(content) {
  return content.replace(/\s+/g, " ");
}

function writeToFileAsync(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }

    console.log("Write to file successful.");

    callback();
  });
}

readFileAsync(filePath, () => {
  console.log("Process completed.");
});
