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

const fs = require('fs')

const p = new Promise((resolve, reject) => {
    fs.readFile("temp.txt", "utf-8", (err, data) => {
        if(err) {
            reject("Error reading from the file")
        }
        let dataWithoutExtraSpaces = data.replace(/\s+/g, ' ')
        resolve(dataWithoutExtraSpaces)
    })
});

p.then((data) => {
    fs.writeFile("temp.txt", data, (err) => {
        if(err) {
            console.error('Error writing to the file:', err);
        }
        console.log("Removed extra spaces from temp.txt");
    })
})