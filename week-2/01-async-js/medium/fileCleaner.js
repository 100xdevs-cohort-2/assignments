const fs = require('fs');

const removeExtraSpaces = (content) => {
  return content.replace(/\s+/g, ' ');
};

const removeExtraSpacesFromFile = (filePath) => {
  fs.readFile('lorem.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
    } else {
      const modifiedContent = removeExtraSpaces(data);
      fs.writeFile('lorem.txt', modifiedContent, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing to file: ${err.message}`);
        } else {
          console.log('Extra spaces removed successfully.');
        }
      });
    }
  });
};

// Specify the correct file path. Replace 'lorem.txt' with your actual file path.
removeExtraSpacesFromFile('lorem.txt');
