// writing to a file
var fs = require("fs")

console.log("Writing to input.txt");

fs.writeFile('input.txt',"Writing to a file" ,function(err){
    if(err){
        return console.error(err)
    }

    console.log("Reading from input.txt")
    fs.readFile("input.txt",'utf8',(err,data)=>{
        if(err){
            return console.error(err)
        }        
        console.log(data);
    })

})

// ASYNC concepts

let a=1;
for(let i =0 ; i < 10000000000000000000; i++){
    a=a+1;
}

console.log(a);