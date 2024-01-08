// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


console.log("Before reading file")
const fs = require("fs");

fs.readFile("a.txt", 'utf-8', (err, data) => {

  console.log(data);
});

setTimeout(() => {
  console.log("This message will appear after 3 seconds")
}, 3000);

console.log("after setTimeout");

var sum = 0;

for(let i = 0; i<10000000; i++)
{
  sum = sum + i
}

console.log("Total Sum : ", sum);


console.log("Program is over");