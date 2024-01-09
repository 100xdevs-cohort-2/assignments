const fs = require("fs");

const filePath = "sample.txt";
const contentToWrite = "Goldman sucks tbh";

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

writeToFileAsync(filePath, contentToWrite, () => {
  console.log("Process completed.");
});
