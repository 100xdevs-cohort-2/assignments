// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const { log } = require('console');
const read = require('fs')

read.readFile('temp.txt','utf-8',(err,data)=>{
    console.log(data);
})

let sum = 0;
for(let i =0;i<100000000;i++){
    sum = sum+i;
}

console.log(sum)
console.log("task1")

let anotherSum = 0;

for(let i = 0;i<1000000000;i++){
    anotherSum = anotherSum+i;
}
console.log(anotherSum);

console.log("task2")
console.log("File will be displyed after all sync task completed");