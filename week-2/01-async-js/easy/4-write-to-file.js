/**
 * 
 * Write to a file Using the fs library again, try to write to the contents of a file. 
 * You can use the fs library to as a black box, the goal is to understand async tasks.
 */
// Write to a file
// fs.writeFile(file, data[, options], callback)
const fs = require("fs");
fs.writeFile("a.txt", "Hi Taha", function (err) {
    console.log("Successfully written");
});

// OR
// Arrow function
fs.writeFile("a.txt", "Hi Taha", (err) => {
    if (err)  console.log(err); 
    else console.log("Successfully written");
});
// Expensive operation
console.log("Helllo");
let sum = 0;
for(let i = 0 ; i < 1000000000; i++){
  sum++;
}
// console.log(sum);
console.log("Bye");
