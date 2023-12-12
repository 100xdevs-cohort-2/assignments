const fs = require("fs");

function cleanFile() {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    let fileData = data.replace(/\s+/g, " ");

    fs.writeFile("a.txt", fileData, "utf-8", (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("File has been successfully written");
        return;
      }
    });
  });
}

cleanFile();
