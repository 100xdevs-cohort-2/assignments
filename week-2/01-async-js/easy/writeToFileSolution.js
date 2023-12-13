// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
let text = "Written something random to this file to complete the assignment";

fs.writeFile("file.txt", text, { encoding: "utf-8" }, function (err) {
    if (err) {
        console.log("Err: " + err);
    } else {
        // do something after the file is written
        console.log('File written successfully');
    }
})
