## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs');

function cleanFile(textfile) {
  fs.readFile(textfile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Clean the text data
    const cleanedText = data.replace(/\s{2,}/g, ' ').trim();

    // Write the cleaned text back to the file
    fs.writeFile(textfile, cleanedText, 'utf8', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Successfully cleaned and wrote back to ${textfile}`);
      }
    });
  });
}

cleanFile('a.txt');
