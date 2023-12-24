## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

### Solutions:-

```js

const fs = require('fs');

const data = "Hello, I am writting this data into the hello.txt";
fs.writeFile('hello.txt', data, 'utf-8', () => {
    console.log("File Written successfully");
})

console.log("Continuing our thread");

```
