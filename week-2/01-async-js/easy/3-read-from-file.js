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


for (let index = 0; index < 100000000000000000; index++) {
    console.log("printing");
}