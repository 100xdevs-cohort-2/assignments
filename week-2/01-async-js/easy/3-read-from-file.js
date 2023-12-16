var fs = require("fs")

fs.readFile('3-read-from-file.md' ,'utf8', function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data);
})

let a =1;
for(let i =0; i < 100000000; i++){
    a=a+1;
}
console.log(a);
