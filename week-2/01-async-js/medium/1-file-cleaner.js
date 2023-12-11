const fs = require('fs');

const filePath = 'a.txt';  
fs.readFile(filePath, 'utf-8', function(err, data) {
  if (err) {
    console.log('Error occurred:', err);
  } else {
    
    const modifiedData = data.replace(/\s+/g, ' ');

    fs.writeFile(filePath, modifiedData, function(err) {
      if (err) {
        console.log('Error writing file:', err);
      } else {
        console.log('File cleaned successfully!');
      }
    });
  }
});
