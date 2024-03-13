const fs = require('fs');

function readAndProcessFile() {
  fs.readFile('./3-read-from-file.md', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File Contents:', data);
    expensiveOperation();
  });
}

function expensiveOperation() {
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  console.log('Expensive Operation Result:', result);
}

readAndProcessFile();
