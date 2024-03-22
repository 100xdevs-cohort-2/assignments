// Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function readFile() {
  fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

readFile();

console.log("This is first expensive operation");

for (let i = 0; i < 1000000; i++) {
  // do nothing
}

console.log("Expensive operation done");

console.log("This is second expensive operation");

for (let i = 0; i < 1000000000; i++) {
  // do nothing
}

console.log("Expensive operation done");
