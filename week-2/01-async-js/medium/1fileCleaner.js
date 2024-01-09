const fs = require('fs');

let filePath = "/Users/pranjalsurana/Desktop/Cohort/assignment1/week-2/01-async-js/easy/text.txt";
let toWrite;
let regex = /\s+/g;


async function readfunction() {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            console.error('Error reading the file:', error);
            return;
        }
        return data;
    });
}

async function writeFunction(toWrite) {
    toWrite = toWrite.replaceAll(regex, ' ');
    fs.writeFile(filePath, toWrite, 'utf8', (error) => {
        if (error) {
            console.error('Error reading the file:', error);
            return;
        }
        console.log("Written: ", toWrite);
    });
}
   
data = await readfunction();
writeFunction(data);

console.log("YOYO!");


