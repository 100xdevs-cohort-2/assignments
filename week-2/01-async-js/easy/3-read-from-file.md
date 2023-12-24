## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

### Solutions JS code: 

```js

const fs = require('fs');

console.log("Reading hello.txt file...")

fs.readFile('hello.txt', 'utf-8', (err, data) => {
    console.log(data);
    console.log("File Read Successfully");
})

console.log("On our main thread...");

let a = 0; 
for(let i = 0; i<1000000000; i++){
    a+= i;
}
console.log(a);
```

