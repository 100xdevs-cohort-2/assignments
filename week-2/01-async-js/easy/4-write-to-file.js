// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
//fs is the NodeJS module called file system to handle file operations
const fs = require("fs");


//this module has function called writeFile() that take some parameters to write to the file 
//first para is the file path
//second para is text thats needed to write to the file
//third para is asynchronous callback function that will be called once the file has been completely read 
let text = "the text that i wanted to insert into a.txt";
fs.writeFile("a.txt",text,function (err,data) {
    console.log("after writing into a.txt")
    console.log(fs.readFileSync("a.txt","utf-8"));

})
console.log("finished")


//the fs.writeFile() function is an asyncronous function. So, it is given a worker thread AND the JS main thread executes the next lines of code
//If the JS thread become idle and the worker thread has finished the task of writing to file,THe JS thread runs the callback function which prints the output (either content or error)
//If the JS thread is not idle,then it will not run the callback function and will continue to finish its task.After completion it will run the callback function
