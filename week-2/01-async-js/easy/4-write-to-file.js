/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require('fs');

let a = 1;
console.log(a);

// Read from a file
fs.readFile('week-2/01-async-js/easy/a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log("Data read from the file is: ");
  console.log(data);

  // Perform operations
  let ans = 0;
  for (let i = 0; i < 100; i++) {
    ans += i;
  }

  console.log("Result of operations:", ans);

  // Write to a new file
  fs.writeFile('week-2/01-async-js/easy/a.txt', `Data read from the file: ${data}\nResult of operations: ${ans}`, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Data written to output.txt');
  });
});

// This will be executed before the readFile callback
console.log('Executing the rest of the code...');
