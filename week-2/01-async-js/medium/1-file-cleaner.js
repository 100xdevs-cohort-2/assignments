const fs = require('fs');

const filePath = 'inputfile.txt'; 
function cleanFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const cleanedContent = data.replace(/\s+/g, ' ');

    fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }

      console.log('File has been cleaned and updated successfully.');
    });
  });
}

cleanFile();
