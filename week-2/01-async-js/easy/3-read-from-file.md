## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

### Solution

#### File Content (a.txt)
```
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
```

#### Code
```
const fs = require("fs");

// Reading the file
fs.readFile("a.txt", "utf-8", (err, data) => {
    if(err) return
    console.log(data);
});

// Performing heavy task
let mult = 1;
for (let i = 1; i < 1000000000; i++) {  
    mult *= i;
}

```