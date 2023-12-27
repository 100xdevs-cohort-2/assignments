// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

let fs = require('fs');
fs.readFile('./testFile.txt','utf-8',function(err, content){
    console.log(content);
})

//expensive operation
let sum = 0;
for(let i = 0 ; i < 9999999999 ; i++){
    sum += i;
}
console.log(sum);
//conclusion: first it takes a long time calculate sum but once it logs sum, it logs content of file instantly,
//most probably cause it has already read the file but is waiting for sync fn to finish executing