/**
 * Reading the contents of a file
Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.
 */

//read file
// fs.readFile(path[, options], callback) 
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});
console.log("Syncronus Fxn");

// OR
// Arrow function

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("Syncronus Fxn");


console.log("Helllo");
// Expensive operation
let sum = 0;
for(let i = 0 ; i < 10000000000; i++){
  sum++;
}
console.log(sum);
console.log("Bye");
