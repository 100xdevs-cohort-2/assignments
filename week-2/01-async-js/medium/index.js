const fs = require("fs");

function cleanFile() {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    const newString = data.replace(/\s+/g, " ");

    fs.writeFile("a.txt", newString, () => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("File written successfully");
    });
  });
}

cleanFile();
