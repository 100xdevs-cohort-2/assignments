/* File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman 
```*/

const fs = require('fs');

function removeExtraSpaces(str) {
    return str.replace(/\s+/g, ' ');
}

const filepath = 'C:/Users/MIHIR/Desktop/git-cohort/week-2/01-async-js/medium/file.txt';

function fileManipulation() {
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        let cleanedFile = removeExtraSpaces(data);

        // Write the cleaned content back to the file
        fs.writeFile(filepath, cleanedFile, 'utf-8', (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return;
            }

            console.log('File cleaned and updated successfully.');
            console.log(cleanedFile);
        });
    });
}

// Call the function to perform file manipulation
fileManipulation();
