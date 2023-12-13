
const fs = require('fs');

const filePath = 'b.txt';


fs.readFile(filePath, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading file:', readErr);
    return;
  }

 
  const modifiedContent = data.replace(/\s+/g, ' ');

  
  fs.writeFile(filePath, modifiedContent, (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
    } else {
      console.log('File has been successfully modified and saved.');
    }
  });
});
