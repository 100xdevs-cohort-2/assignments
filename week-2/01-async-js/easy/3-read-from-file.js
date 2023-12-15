// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

fs.readFile("temp.txt", "utf-8", (err, data) => {
  console.log(data);
});

let sum_1000000 = 0;
for (let index = 1; index <= 1000000; index++) {
  sum_1000000 += index;
}
console.log(sum_1000000);
console.log("Expensive_Operation-1 done");

let sum_100000000 = 0;
for (let index = 1; index <= 100000000; index++) {
    sum_100000000 += 5;
}
console.log(sum_100000000);
console.log("Expensive_Operation-2 done");

console.log('File content will be displayed after all the synchronous tasks are completed.');


