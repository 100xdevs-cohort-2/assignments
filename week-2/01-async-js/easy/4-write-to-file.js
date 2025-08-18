//  Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const newData = " This is new data written to the file from Node.js";

fs.writeFile('file.txt',newData, 'utf8', (err, data) => {
    console.log(data);
});