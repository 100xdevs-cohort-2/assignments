const fs= require("fs")

const con="added something"

fs.writeFile('read.txt', con,function(err){
    if(err){
        console.log('something went wrong',err)
    }
    console.log("good to go")
})
console.log("hi wrote this to file")