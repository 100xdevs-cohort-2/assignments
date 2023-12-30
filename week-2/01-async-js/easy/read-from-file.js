const fs = require("fs");

fs.readFile("content-file.txt","utf-8",function(err,data){
    console.log("File content :",data);
});



let a =0;
for(let i=0;i<1000000000000;i++){
    a+=i;
}
console.log("File reading starts");
