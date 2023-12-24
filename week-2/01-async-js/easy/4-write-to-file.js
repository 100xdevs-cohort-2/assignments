const fs = require('fs')

fs.writeFile('/home/vishnubv944/Cohort/assignments/week-2/01-async-js/easy/file.txt', 'Updated the file "file.txt" using the writeFile method', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });