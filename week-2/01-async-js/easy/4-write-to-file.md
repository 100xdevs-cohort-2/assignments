## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

### Solution

#### Code
```
const fs = require("fs");

fs.writeFile("a.txt", "Hi there, I'm wrting content to the file", (err) => {
    if(err) return
    console.log("done")
});
```

#### Output - File Content (a.txt)
```
Hi there, I'm wrting content to the file
```