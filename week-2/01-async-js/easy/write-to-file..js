const fs = require("fs");

let content = "Hey this is the Write to File content";

fs.writeFile("content-file.txt",content,function(){
    console.log("Data written successfully");
})


let a =0;
for(let i=0;i<100000000;i++){
    a+=i;
}

console.log("File writing starts");