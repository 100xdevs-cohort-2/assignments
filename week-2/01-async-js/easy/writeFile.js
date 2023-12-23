const fs = require("fs");

fs.writeFile("a.txt", "write new content", "utf8", (err) => {
  if (!err) {
    console.log("File has been updated!");
  }
});
