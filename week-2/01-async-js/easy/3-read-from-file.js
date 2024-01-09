// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs=require('fs');

const file_content = fs.readFile('4-write-to-file.txt','utf8',(err,data)=>{  //utf8 is must otherwise it will read data in bytes format
    console.log(data);   // also in readFile callback arg1:err and arg2:data
});

for(let i=0;i<1000000;i++){}
console.log("first for loop done");
for(let j=0;j<100000;j++){}
console.log("sec loop done");