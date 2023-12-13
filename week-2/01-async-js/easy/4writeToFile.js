const fs = require('fs');

let filePath = "/Users/pranjalsurana/Desktop/Cohort/assignment1/week-2/01-async-js/easy/text.txt";
let toWrite = "Please add this text!";
fs.writeFile(filePath, toWrite, 'utf8', (error) => {
    if (error) {
        console.error('Error reading the file:', error);
        return;
    }
    console.log("Written ", toWrite);
});

console.log("YOYO!");

