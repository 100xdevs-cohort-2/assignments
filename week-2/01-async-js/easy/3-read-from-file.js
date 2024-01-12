const fs = require("fs");
const filepath = "c:/Users/WIN 10/Desktop/Cohort-assignments/week-2/01-async-js/easy/file.txt"

fs.readFile(filepath, 'utf8',(err,data) =>{
    console.log(data);
});

console.log("Expensive operation start");
let a = 0;
for (let index = 0; index < 1000000; index++) {
    a = a+index;
}
console.log("Expensive operation end");