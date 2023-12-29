const fs = require('fs')
function fileread(filepath){
    fs.readFile(filepath, 'utf-8', function (err, data){
        if (err){
            console.log(err)
        }
        else{
            console.log("content of the file is" , data)
        }
    })
}
filepath = '3-read-from-file.md'
fileread(filepath)