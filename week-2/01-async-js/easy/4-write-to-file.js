const fs = require('fs');

const content = 'Hello, this is the content to be written to the file.';

fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been written successfully.');
  }
});