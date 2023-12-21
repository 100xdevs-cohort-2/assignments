const fs = require("fs");

fs.readFile("test.txt", "utf-8", function (err, data) {
  let readedData = data.trim().split(" ");
  readedData = readedData.join("");

  fs.writeFile("test.txt", readedData, function (err) {
    console.log("data is changed");
  });
});
