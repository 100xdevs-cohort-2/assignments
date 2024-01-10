// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");
function readAndprint() {
  fs.readFile("a.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    expensiveOperation()
  });
}

function expensiveOperation() {
  const f = 1;
  for (let i = 0; i < 1000000000; i++) {
    f * i;
  }
}
expensiveOperation();
readAndprint();
