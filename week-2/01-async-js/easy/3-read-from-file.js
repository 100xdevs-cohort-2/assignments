// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function getData(){
    return new Promise(function(resolve){
        fs.readFile("./week-2/01-async-js/easy/a.txt", "utf-8", function(err, data){
            resolve(data);
        });
    });
}


getData().then((data) => {
    console.log(data);
});

let a = 1;
for(let i=0; i<10000000; i++){
    a++
    console.log(a);
}

console.log("after expensive operation");