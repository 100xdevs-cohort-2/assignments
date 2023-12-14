const fs = require("fs");
const dataToWrite = "Hi My name is shubham";
fs.writeFile("a.txt", dataToWrite, function (err, content) {
  if (err) {
    throw err;
  }
  console.log("Saved");
});
