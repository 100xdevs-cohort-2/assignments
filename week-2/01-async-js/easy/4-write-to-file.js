const fs = require('fs');
const dataToWrite = 'NEW DATA';
const filePath = '../easy/sample-file.txt';
const date1 = new Date();

fs.writeFile(filePath, dataToWrite, 'utf-8', function(err) {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('File has been written successfully.');
    }
    const date2 = new Date();
    console.log('Took ' + (date2 - date1) / 1000 + ' seconds');
});

let sum = 0;
for (let i = 0; i < 2000000000; i++) {
    sum += i;
}