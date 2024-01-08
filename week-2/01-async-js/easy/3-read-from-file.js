/*
## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

const fs = require("fs");

function readFileAndPrint(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    console.log("File Contents:", data);

    expensiveOperation(data.length);
  });
}

// Function simulating an expensive operation
function expensiveOperation(length) {
  for (let i = 0; i < length * 10000; i++) {
    let sum = 0;

    for (let i = 1; i <= 50; i++) {
      sum += i;
    }

    return sum;
  }

  console.log("Expensive operation completed.");
}

const filePath = "a.txt";

readFileAndPrint(filePath);
