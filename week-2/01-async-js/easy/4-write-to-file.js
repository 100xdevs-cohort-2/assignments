/*## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require('fs');

console.log('Starting file writing process...');

fs.writeFile('a.txt', 'This is the content to be written.', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }

    // Additional code to execute after file writing
    console.log('This code will execute after the file writing completes, regardless of success or failure.');
});

console.log('This code might execute before the file is fully written.');
