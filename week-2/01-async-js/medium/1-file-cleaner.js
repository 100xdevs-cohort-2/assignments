const fs = require('fs')

const filepath = "text.txt"
let change = ""

fs.readFile(filepath,'utf-8',(err,data)=>{
    if(data){
        change = data
        change = change.replace(/\s+/g,' ')
        write()
    }
    else{
        console.log(err)
    }
})

let write = ()=>{
    fs.writeFile(filepath, change,'utf-8',(err)=>{
        if(err){
            throw new Error(err)
        }
    })
}