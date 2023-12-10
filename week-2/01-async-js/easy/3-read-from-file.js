// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function expensiveOperation() {
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
        sum += i;
    }
    console.log('Expensive operation completed '+sum);
}

fs.readFile('a.txt', 'utf8', function(err, contents) {
    if (err) {
        console.error(err);
    } else {
        console.log(contents);
        expensiveOperation();
    }
});


