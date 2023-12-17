// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```\

const fs = require('fs');

let contentExisting = fs.readFileSync('./testFile.txt','utf-8')
console.log(contentExisting);

let newWriting = contentExisting.replace(/ +/g," ");
console.log(newWriting);

fs.writeFile('./testFile.txt', newWriting, err => {})
/*

//BOTH METHODS WORK. 

// Read the file
fs.readFile('./testFile.txt', 'utf-8', (err, contentExisting) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(contentExisting);

    // Replace extra spaces
    let newWriting = contentExisting.replace(/ +/g, " ");
    console.log(newWriting);

    // Perform other operations if needed...

    // Write the updated content back to the file outside of fs.readFile
    writeToFile('./testFile.txt', newWriting);
});

// Function to write content to the file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('File updated successfully!');
        }
    });
}
*/