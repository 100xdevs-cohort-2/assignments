const fs = require("fs")
const content = "hello javascript lover this is the content i want to write in the existing file"
function writefile(filepath, content){
    fs.writeFile(filepath, content, 'utf-8', function(err){
        if (err){
            console.log("error while reading the file", err)
        }
        else{
            console.log("content has been written succesfully")
        }
    })
}

writefile('4-write-to-file.md', content)