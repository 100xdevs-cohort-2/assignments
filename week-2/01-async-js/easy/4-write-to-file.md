## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs")

function write (){
fs.writeFile("abx.txt", "hello hadi","utf-8", (err) =>{
    if(err){
        console.log(err)
        return
    }
    console.log("wrote successfully")
})
}

write()
