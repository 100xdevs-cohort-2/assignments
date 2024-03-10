const fs = require('fs');

const path = "output.txt";
const contentToWrite = "Looking forward to learn more from the cohort :)";

fs.writeFile(path, contentToWrite, 'utf-8', (err) => {
    if(err){
        console.log("Error writing the file", err);
        return;
    }
    console.log("Writing Completed");
})