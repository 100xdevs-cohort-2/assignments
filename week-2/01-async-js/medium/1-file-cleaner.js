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
```
*/

const fs = require('fs');

function cleanFile(filePath) {
  // Read the content of the file
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
        console.log('Error reading the file: ', err.message);
    }

    // removing unnecessary spaces
    const cleanedData = data.replace(/\s+/g, " ");

    // Write the cleaned data
    fs.writeFile(filePath, cleanedData, 'utf-8', (err) =>{
        if(err){
            console.log('Error writing the file: ', err.message);
            return;
        }

        //print the cleaned data
        console.log('File cleaned successfully: ', cleanedData);
    });
  });
}

// path of the file
cleanFile('week-2/01-async-js/medium/fclean.txt', 'utf-8');