const fs = require("fs");

const cleanFile = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    const cleanedContent = data.replace(/\s+/g, " ");

    fs.writeFile(filePath, cleanedContent, "utf-8", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }

      console.log("File cleaned and updated successfully!");
    });
  });
};

const filePath = "./1-file-cleaner.txt";

cleanFile(filePath);
