// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("node:fs");

const expensiveOperation = () => {
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.random();
  }
  return result;
};

const moreExpensiveOperation = () => {
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result += Math.sqrt(Math.log(Math.exp(Math.random())));
  }
  return result;
};

fs.readFile("week-2/02-nodejs/files/a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    const result = expensiveOperation();
    console.log("Result of expensive operation:", result);
    const result2 = moreExpensiveOperation();
    console.log("Result of more expensive operation:", result2);
  }
});
