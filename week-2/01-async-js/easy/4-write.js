const fs = require('fs');

fs.appendFile('./3-readfile.txt', ' This is appended data.', (err) => {
    if (err) {
       console.error('Error appending to file: ', err);
    } else {
       console.log('Successfully appended to file.');
    }
   });


   