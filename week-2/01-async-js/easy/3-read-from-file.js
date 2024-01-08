//Reading the contents of a file

//Write code to read contents of a file and print it to the console. 
//You can use the fs library to as a black box, the goal is to understand async tasks. 
//Try to do an expensive operation below the file read and see how it affects the output. 
//Make the expensive operation more and more expensive and see how it affects the output. 

//importing the NOdejs module called filesytem to handle file operations
const fs = require("fs");

//this module has readFile() function that take some parameters to read a file
//first parameter is the file location path
//second file is the encoding of the file
//the third argument is the anonymous callback function that will be called once the file has been completellly read or an error occurs
//the anonymous callback function has two arguments one is error object to handle invalid cases and second is the file content
fs.readFile("a.txt","utf-8",function (err,data){
    console.log(data);
});
console.log("Before setTimeout()");

//using setTimeout() function to bring a delay of 5s as a matter of an expensive operation
setTimeout(() =>{
    console.log("Inside setTimeout()");
},6000);

console.log("After setTimeout()");

//readFile and setTimeout() are syncronous function by default
//when the code runs,JS thread let some worker thread to perform the read operationns
//until then it will execute the next lines in the codes
//when it reaches setTimeout(),The JS thread will set a timer of seconds and then execute the next lines of code
//Till then, the Worker thread finishes the reading operation and sends the value to the callback queue 
//if this JS thread is free and the call stack is empty,the event loop will shift the readFile() function from the callback queue to the callstack
//THe output Depends up on the time taken by each asynchronous functions



