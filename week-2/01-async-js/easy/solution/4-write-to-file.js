const fs = require("fs");

const fileContent = "Hello, this is the content of the file.";

// Write the file
fs.writeFile("b.txt", fileContent, "utf-8", (err) => {
  if (err) {
    console.error("Error writing the file:", err);
  } else {
    console.log("File written successfully!");
  }
});
