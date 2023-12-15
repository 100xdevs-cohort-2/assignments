const fs = require('fs')

const path = 'file.txt'

fs.readFile(path,'utf-8',(err,data)=>{
    if(err){
        console.log(`Error while reading file:${err.message}`)
        return
    }

    const modifiedContent = data.replace(/\s+/g,' ');

    fs.writeFile(path,modifiedContent,'utf-8',(err)=>{
        if(err){
            console.log(`Error while writing file:${err.message}`)
            return
        }
    })
    console.log('Successfully removed all extra spaces')
})