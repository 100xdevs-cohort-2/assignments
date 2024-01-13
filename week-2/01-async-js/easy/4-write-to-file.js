const fs = require('fs');


const filePath = "./01-async-js/easy/readFile.txt";

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`File does not exist: ${filePath}`);
    } else {
        console.log(`File exists: ${filePath}`);
    }
});

const d = fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file: ${filePath}");
    }
    console.log(data);
});


fs.appendFile(filePath, "\nExtra data written to the file", "utf8", (err) => {
    if (err) {
        console.log(`error writing file: ${filePath}`);
    } else {
        console.log(`data written to file: ${filePath}`);
    }
})