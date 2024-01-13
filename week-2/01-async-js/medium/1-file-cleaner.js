const fs = require('fs');


const filePath = "./01-async-js/medium/readFile.txt";

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`File does not exist: ${filePath}`);
    } else {
        console.log(`File exists: ${filePath}`);
    }
});

let dataRead = "";

const d = fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file: ${filePath}");
    }
    dataRead = data;
    dataRead = dataRead.replace(/\s+/g, ' ');
    dataRead.trim();
    fs.writeFile(filePath, dataRead, (err) => {
        if (err) {
            console.log("error writing file: ${filePath}");
        }
        console.log("File written successfully");
    });
});
