const fs = require("fs");

function readingWriting() {
  fs.readFile("reading.txt", "utf-8", function (err, data) {
    fs.writeFile("writing.txt", spaceRemoverLogic(data), function (err) {
      console.log("content changed");
    });
  });
}

function spaceRemoverLogic(data) {
  let output = data
    .split(" ")
    .filter((word) => word != "")
    .join(" ");
  return output;
}

readingWriting();
