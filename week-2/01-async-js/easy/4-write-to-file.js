// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const text = 'Hello, this is the content to be written to the file.';

fs.writeFile('b.txt', text, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('File "b.txt" has been written successfully.');
    }
});
