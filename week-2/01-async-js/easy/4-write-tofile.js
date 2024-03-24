// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

var fs = require("fs");

function writeToFile(file, cb) {
  console.log("in writeToFile");
  fs.writeFile(file, "New line added to the file", () => {
    cb();
  });
}

function printData(data) {
  console.log("File write done");
}

function expensiveFunction() {
  console.log("In expensive function");
  for (let i = 0; i < 10000; i++) {
    let a = 0;
    a++;
  }
}

writeToFile("sample.txt", printData);
expensiveFunction();
