const fs = require('fs')

let data = 'Write function performed'

const writeFile = (path)=>{
    fs.writeFile(path, data , (err) => {
        if(err){
            console.log("Error Occured")
        }
        else{
            console.log("File write executed")
        }

    })
}

const path = 'writeFile.md'

writeFile(path)