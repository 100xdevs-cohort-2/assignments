// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

// Function to read the contents of a file
function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }})
}
// Calling our function with a filename
readFileAndPrint('sample.txt')
// Function to simulate an expensive operation

// Function to write to a file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return;
        }
    });
}

// Write to a file
writeToFile('sample.txt', 'Hello, World!');

