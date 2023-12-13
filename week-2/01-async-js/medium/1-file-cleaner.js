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

const fs = require("fs");

function cleanFile() {
  let p = new Promise((resolve, reject) => {
    fs.readFile("1-file-cleaner.text", "utf-8", (err, data) => {
      if (err) throw err;
      resolve(data.replace(/\s+/g, " "));
    });
  });
  p.then((data) => {
    fs.writeFile("1-file-cleaned.text", data, (err) => {
      if (err) throw err;
    });
  }).then(() => {
    fs.readFile("1-file-cleaned.text", "utf-8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
}

cleanFile();
