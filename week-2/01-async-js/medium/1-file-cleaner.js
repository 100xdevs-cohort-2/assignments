/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` */

const fs = require('fs');

fs.readFile('a1.txt', 'utf-8', function(err, data) {
    data = data.replace(/\s+/g, ' ');
    fs.writeFile('a.txt', data, function(err) {
      if(err) {
        console.log(err);
      }
    });
    console.log(data);
})