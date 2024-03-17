// Reading the contents of a file

// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 

// Make the expensive operation more and more expensive and see how it affects the output. 
//Sol: Basically the program demonstrates that the async function is only executed once the whole program is executed by the parent thread.

const fs = require("fs");

fs.readFile("content.txt","utf-8",(err,data)=>{
    console.log(data);
});

let count = 0;
console.log("Before the expensive operation");
for (let x = 0; x < 1000000000; x++) {
  count++;
}
console.log("After the expensive operation", count);
