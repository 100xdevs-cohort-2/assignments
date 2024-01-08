
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



// const fs = require('fs');
// function readingFile(){
//     fs.readFile('file.txt','utf-8',(err,data)=>{
//         if(err){
//             console.log('Error happend reading your file:',err.message);
//         }
//         else{
//             console.log(data);
//         }

//         let sum = 0;
//         for(let i = 0;i<1000000000;i++){
//             sum = sum+1;
//         }
//         console.log(`expensive operation done and dusted,sum is${sum}`);
    
//     })

   
    

// }

// readingFile()