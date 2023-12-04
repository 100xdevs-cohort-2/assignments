//## Write to a file
//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

// Function to write data to a file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to file: ${err}`);
            return;
        }

        console.log(`Data has been written to ${filename}`);
    });
}

// Specify the file path and data you want to write
const filename = 'sample.txt';
const contentToWrite = 'Hello, this is the content to be written to the file.';

// Write data to the file
writeToFile(filename, contentToWrite);

