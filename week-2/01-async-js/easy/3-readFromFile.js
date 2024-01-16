// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function readFromFile(err, data) {
  console.log(data);
}

fs.readFile("test.txt", "utf8", readFromFile);

let count = 0;
console.log("Before the expensive operation");
for (let x = 0; x < 10000000000; x++) {
  count++;
}
console.log("After the expensive operation", count);
