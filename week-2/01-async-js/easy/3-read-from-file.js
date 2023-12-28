const fs=require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
let count=0;
for(let i=0;i<10000000000;i++){
    count++;
}
console.log(count);