const fs = require('fs');

let filePath = "/Users/pranjalsurana/Desktop/Cohort/assignment1/week-2/01-async-js/easy/text.txt";
fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading the file:', error);
        return;
    }
    console.log(data);
});



console.log("YOYO!");

