// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');
let filePath = "3-read-from-file.md";
fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
    if (data) {
        console.log("File data: \n" + data);
    } else {
        console.log("error: " + err);
    }
});
