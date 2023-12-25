/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
*/

const fs = require('fs');

/**
 * Function to clean the file content by removing extra spaces
 * @param {string} filename - The path to the file to be cleaned
 */
function cleanFile(filename) {
    // Read the content of the file asynchronously
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            // Handle errors during file reading
            console.error(`Error reading file: ${err}`);
            return;
        }

        // Remove extra spaces using a regular expression
        const cleanedContent = data.replace(/\s+/g, ' ');

        // Write the cleaned content back to the same file asynchronously
        fs.writeFile(filename, cleanedContent, 'utf8', (err) => {
            if (err) {
                // Handle errors during file writing
                console.error(`Error writing to file: ${err}`);
                return;
            }

            // Notify that the file has been successfully cleaned and updated
            console.log(`File cleaned and updated: ${filename}`);
        });
    });
}

// Specify the file path you want to clean
const filename = 'file.txt';

// Clean the file
cleanFile(filename);

