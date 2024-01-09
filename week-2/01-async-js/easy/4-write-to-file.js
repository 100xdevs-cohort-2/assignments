const fs = require('fs');
const path = require('path');
const newData = ` Juliet save me, I've been alone long enough, I can't wait to be with you all again `;

const writeToFile = () => {

    //The { flag: 'a' } option in fs.writeFile is used to append the new data to the existing content of the file. If the file does not exist, it will be created.

    fs.writeFile(path.join(__dirname, 'example.txt'), newData, { flag: 'a' }, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Write to file successful.');
        }
    });

};

writeToFile();