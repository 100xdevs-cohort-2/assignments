const fs = require("fs");

const filePath = "./a.txt";
const contentToWrite = "Hello, this is the content to write to the file.";

fs.writeFile(filePath, contentToWrite, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }

  console.log("File has been written successfully.");
});
