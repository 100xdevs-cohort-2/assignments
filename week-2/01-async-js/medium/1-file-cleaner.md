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

fs = require('fs');
function space(filePath){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            console.error(`Error reading file: ${err}`);
            return;
        }
        const modification = data.replace(/\s+/g, ' ');

    fs.writeFile(filePath, modification, 'utf8', (writeErr) => {
        if(writeErr){
            console.error(`Error writing to file: ${writeErr}`);
            return;
        }
        console.log("File Successfuly Updated");
    })
    })
}

const FilePath = '1-cleaner.txt';
space(FilePath);