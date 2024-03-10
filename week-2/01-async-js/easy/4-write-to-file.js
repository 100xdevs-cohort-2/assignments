// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');
let data = "hey, this side, Anuu here.";

fs.writeFile('abc.txt', data, 'utf8', function(err) {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data has been written to abc.txt');
    }
});
