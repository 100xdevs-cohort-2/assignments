// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

var fs = require("fs");

function readFromFile(file, cb) {
  console.log("in readFromFile");
  fs.readFile(file, "utf-8", (err, data) => {
    cb(data);
  });
}

function printData(data) {
  console.log(data);
}

function expensiveFunction() {
  console.log("In expensive function");
  for (let i = 0; i < 10000; i++) {
    let a = 0;
    a++;
  }
}

readFromFile("sample.txt", printData);
expensiveFunction();
