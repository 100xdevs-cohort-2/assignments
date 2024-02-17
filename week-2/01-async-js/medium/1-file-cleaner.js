/*  File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');

function removeExtraSpaces(line) {
  return line.replace(/ +/g, ' ').trim();
}

function cleanFile(filePath) {

  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      console.error('Error reading the file:', err);
      return;
    }

    const cleanedLines = data.split('\n').map(removeExtraSpaces);

 
    const cleanedContent = cleanedLines.join('\n');

    fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
      console.log(`File ${filePath} has been cleaned successfully.`);
    });
  });
}

const filePath = 'a.txt'; // Replace with the path to your file
cleanFile(filePath);
