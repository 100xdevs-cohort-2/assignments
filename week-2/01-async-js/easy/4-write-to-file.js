// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

// Function to write to a file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, 'utf8', (err,data) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Successfully wrote to file:', filename);
        }
    });
}

writeToFile('a.txt', 'hello from a.txt');