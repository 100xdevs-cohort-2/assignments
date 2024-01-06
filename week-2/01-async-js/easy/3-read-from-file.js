// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// Import the NodeJS module called filesystem to handle file operations.
const fs = require("fs");

//It takes 3 parameters
fs.readFile("file.txt", "utf-8", (err, data)=> {
    if(err){
        console.log("Error reading the file", err)
    }
    else{
        console.log(data);
    }
    
});

console.log("Before using setTimeout")

//Now using setTimeout and making thread busy for 2 sec

setTimeout(() => {
    console.log("inside setTimeout function")
}, 2000);

console.log("After setTimeout function")

