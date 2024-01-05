// Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
}
);


// Hint: You can use the following snippet to make the expensive operation more and more expensive:
for (let i = 0; i < 1000000; i++) {
    console.log(i);
}