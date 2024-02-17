const fs= require("fs")

fs.readFile('read.txt',"utf-8", function(err,data){
    if(err){
        console.log('something happened',err)
    }
    else{
        console.log(data);

    }
})

console.log("hi there this is the data we are reading:")