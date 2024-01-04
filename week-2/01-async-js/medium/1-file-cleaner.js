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
const fileName = '1-test-file.txt';

// set up file content
fs.writeFile(fileName, 'hello     world    my    name   is       raman', err => {
    if (err) {
        console.log(err);
        return;
    }
});

fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('before: ', data);

    const cleanedData = data.replace(/\s+/g, ' ');

    console.log('after: ', cleanedData);

    fs.writeFile(fileName, cleanedData, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File cleaned successfully.');
    });
});