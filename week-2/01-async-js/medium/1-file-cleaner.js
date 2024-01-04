// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let newString = data.replace(/\s+/g, ' ');
    fs.writeFile('file.txt', newString, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
);
