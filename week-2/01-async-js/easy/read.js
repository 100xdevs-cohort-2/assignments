const fs = require('fs');

// Function to read the contents of a file
function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
        } else {
            console.log('File content:');
            console.log(data);


            simulateExpensiveOperation();
        }
    });
}


function simulateExpensiveOperation() {
    console.log('Simulating an expensive operation...');

    for (let i = 0; i < 1000000000; i++) {

    }
    console.log('Expensive operation complete.');
}


const filename = '3-read-from-file.md';


readFileAndPrint(filename);
