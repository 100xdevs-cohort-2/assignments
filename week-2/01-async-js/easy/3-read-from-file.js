/*
Reading the contents of a file and print it
on console using fs library as a black bax.
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

const fs = require("fs");

fs.readFile("week-2/01-async-js/easy/3-a.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Error while reading the file:", error);
    return;
  }
  console.log(data);
});

for (let i = 0; i < 3000000000; i++) {}
