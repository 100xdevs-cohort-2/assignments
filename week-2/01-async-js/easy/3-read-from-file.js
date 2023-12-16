const fs = require("fs");

fs.readFile("content.txt","utf-8",(err,data)=>{
    console.log(data);
});

let count = 0;
console.log("Before the expensive operation");
for (let x = 0; x < 1000000000; x++) {
  count++;
}
console.log("After the expensive operation", count);