const fs = require("fs")

fs.readFile("a.txt","utf-8",(err,data) => {
    console.log(data);
});
let x = 0;
while(x < 10000000){
    x++;
}
console.log("sefg")