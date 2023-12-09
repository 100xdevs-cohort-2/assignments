const fs = require('fs');

function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File contents:', data);

            performExpensiveOperation(() => {
                console.log('Expensive operation completed.');
            });
        }
    });
}

function performExpensiveOperation(callback) {
  setTimeout(() => {
    callback();
  }, 2000); 
}

const filename = 'week-2/01-async-js/easy/3-file.txt';

readFileAndPrint(filename);
