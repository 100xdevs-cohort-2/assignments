const fs = require("fs");

let text = "Written someting random to this file";

fs.writeFile("new-file.txt", text, { encoding: "utf-8" }, function (err, data) {
  if (err) {
    console.log("Err:", error);
  }
});
