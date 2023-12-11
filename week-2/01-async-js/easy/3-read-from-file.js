const fs=require("fs")

fs.readFile("./data.txt", "utf-8", function(err, data){

    console.log(data)
})
console.log("This will be executed")
let a=0;
for(let i=0; i<9000000000; i++){
    // some text...
    a=a+i;
    
}




