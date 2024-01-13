const { error } = require("console");
const fs = require("fs");

function readAndWrite() {
  fs.readFile("file.md", "utf-8", (err, data) => {
    try {
      console.log(data);
      const modified = data.replace(/\s+/g, " ");
      fs.writeFile("file.md", modified, "utf-8", (data) => {
        console.log("File modified successfully");
        console.log(modified)
      });
    } catch (err) {
      console.error(error);
    }
  });
}

readAndWrite();
