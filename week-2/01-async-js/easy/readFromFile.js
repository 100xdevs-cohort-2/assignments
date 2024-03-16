const fs = require('fs');

// Function to read the contents of a file
function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }

        console.log(`File Contents: ${data}`);
    });	
    simulateExpensiveOperation();
}

// Function to simulate an expensive operation
function simulateExpensiveOperation() {
    const startTime = Date.now();

    // Simulate an expensive operation (e.g., a loop)
    for (let i = 0; i < 10000000000; i++) {
        // Perform some computation
    }

    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log(`Expensive operation completed in ${duration} milliseconds`);
}

// Specify the file path you want to read
const filename = 'sample.txt';

// Read the contents of the file and print them to the console
readFileAndPrint(filename);