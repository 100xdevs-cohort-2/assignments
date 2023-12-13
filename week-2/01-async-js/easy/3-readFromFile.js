const fs = require("fs");

// Function to read file asynchronously
function readAndPrintFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
      return;
    }

    console.log("File Content:\n", data);

    // Perform an increasingly expensive operation
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      sum = sum + i;
    }
    console.log("Expensive operation executed: ", sum);
  });
}

// Usage: Provide the path to the file
readAndPrintFile("3-4-file.txt");

//the asynchronous nature of file reading allows the expensive operation to execute concurrently with the file reading,
//demonstrating the non-blocking behavior of asynchronous tasks in Node.js.
