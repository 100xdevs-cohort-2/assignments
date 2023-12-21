// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

// Function to read the contents of a file and print it
function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            console.log('File contents:', data);
        }
    });

    // Expensive operation after file read
    for (let i = 0; i < 1e7; i++) {
        // This loop is intentionally made expensive
    }
}

// Replace 'example.txt' with the actual path and name of your file
readFileAndPrint('a.txt');
