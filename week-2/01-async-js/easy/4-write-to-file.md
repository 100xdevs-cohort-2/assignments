## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

### Solution
```js
const fs = require('fs');
const data = "Hello world! :)"

fs.writeFile("abc.txt", data, (err, data) => {
    if(err) throw err;
    else console.log("Write complete");
});
```