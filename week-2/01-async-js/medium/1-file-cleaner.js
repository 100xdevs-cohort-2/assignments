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

const fileName = 'example.txt';

// Read the file
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Remove extra spaces
    const cleanedData = data.replace(/\s+/g, ' ').replace(/\s+\./g, '.');

    // Write back to the same file
    fs.writeFile(fileName, cleanedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('File updated successfully.');
    });
});
