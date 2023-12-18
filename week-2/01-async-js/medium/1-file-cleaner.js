const fs  = require("fs");

fs.readFile("read.txt","utf-8",function(err,data){
    console.log(data)
    const dataFromTextfile = removeExtraSpaces(data)

    fs.writeFile("read.txt",dataFromTextfile,function(err){
        if(err){
            console.log('something error while writing file',err)
        }else{
            console.log('after removal data')
        }
    })
})

function removeExtraSpaces(text) {
    return text.replace(/ +/g, ' ');
}