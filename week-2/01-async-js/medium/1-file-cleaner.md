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

### Solution

```
const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    if(err) return;

    let result = [];
    data.split(" ").forEach((val) => {
        if(val !== ""){
            result.push(val);
        }
    });

    fs.writeFile("a.txt", result.join(" "), (err) => {
        if(err) return;
        console.log("done");
    });
})

```