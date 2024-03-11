const fs = require('fs');

fs.readFile("sample.txt", 'utf-8', (err, data) => {
    if(err) {
        console.error('Error reading the file', err);
        return;
    }

    console.log('File content: ', data);
})


const iterations = 1000000000000000; // Change this number to make the operation more expensive
  
  console.time('expensiveOperation');
  for (let i = 0; i < iterations; i++) {
    // Some expensive computation here (a loop in this case)
  }
  console.timeEnd('expensiveOperation');