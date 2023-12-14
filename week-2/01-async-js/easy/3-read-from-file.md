## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

let fs = require('fs');

function rohitReadsFile(){
    return new Promise(function(resolve){
        fs.readFile(
          "/Users/sonu/Downloads/assignments-master/week-2/01-async-js/easy/a.txt",
          "utf-8",
          function (err, data) {
            if (err) throw err;
            resolve(data);
          }
        );
    });
}

async function main(){
    let value = await rohitReadsFile();
    console.log(value);
    let sum = 0;
    for(let i = 0; i < 10000000000 ; i++){
        sum=100;
    }
    console.log(sum);
}

main();
let sum = 0;
for (let i = 0; i < 10000000000; i++) {
  sum = 200;
}
console.log(sum);

