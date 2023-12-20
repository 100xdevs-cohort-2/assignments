/* ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require('fs');

fs.readFile('a.txt', 'utf-8', function(err, data) {
    data = data + ", Khushi was here";
    fs.writeFile('a.txt', data, function(err) {
      if(err) {
        console.log(err);
      }
    });
    console.log(data);
})