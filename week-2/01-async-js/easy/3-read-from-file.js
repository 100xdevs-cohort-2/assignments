// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

let sum = 0;
fs.readFile("a.txt", "utf-8", function (err, data) {
	console.log(data);
});
console.log("Before setTimeout()");

// Using the setTimeout() function to bring a delay of 2s as a matter of an expensive operation.
setTimeout(() => {
	console.log("Inside setTimeout()");
}, 2000);
console.log("After setTimeout()");

// There are 2 asynchronous functions in the code, readFile() and setTimeout().
// When the code will run, the JS thread let some worker thread to perform the reading operation.
// Until then, it will execute next lines of code.
// Next, it encounters the setTimeout() function. So the JS thread will set a timer of 2s and execute the next line of code.
// Till then, the worker thread finishes the reading operation and sends the value to the callback queue.
// If the JS thread becomes free and the call stack is empty, the event loop will shift the readFile() function from callback queue to the callstack.
// So, the JS thread will execute the readFile() function operation and print "Reading a file using fs library".
// After the timer finishes, the inner callback function executes and prints "Inside setTimeout()".

// Between the asynchronous functions present in the code, the output order depends upon the time taken.
// The function which will take less time will come to the callstack first and eventually be executed by the JS thread.
