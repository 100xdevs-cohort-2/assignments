// ## Reading the contents of a file
//
// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

function myReadFile() {
  fs.readFile('3-read-from-file.txt', "utf8", function (err, data) {
    if (err) throw Error;
    console.log(data);
  });
}

function task(taskLength) {
  for (let index = 0; index < taskLength; index++) {
  }
  console.log("Task Completed")
}

myReadFile();
task(100);

// After observing we can understand the working of readFile's async nature
// When we call the readFile function to read a file JS ask OS for the file.
// But as we know this process isn't instantaneous so the JS continues its other task and 
// OS calls the callback fucntion of readFile
// when he gets the data and this function sits in the callback queue util the
// JS is done with its other task and when the other tasks are finished the event 
// loop dequeue from the callback queue the JS runs it.

// So, reading a file with very very expensive operation below will result 
// in the output of readFile waiting in the callback queue util the JS is free.
// myReadFile()
// task(10000000000000000);





