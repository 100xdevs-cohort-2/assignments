const fs = require('fs');
const path = require('path');

let FileData;
const readFile = () => {

    fs.readFile(path.join(__dirname, 'test.txt'), 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            FileData = data;
            writeToFile();
        }
    });
};

const writeToFile = () => {
    FileData = FileData.replace(/\s+/g, ' ');
    // gpt it for regular expression.
    /*     
    If you want to overwrite existing data when writing to a file, you can use the { flag: 'w' } option in the fs.writeFile function. This flag stands for "write," and it will create a new file if it doesn't exist or truncate the existing file to zero length if it does exist.
    */

    fs.writeFile(path.join(__dirname, 'test.txt'), FileData, { flag: 'w' }, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Write to file successful.');
        }
    });
};

readFile();
// writeToFile();
// We can't call it effective immedialtey due to async nature this functions

