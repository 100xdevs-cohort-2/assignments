const fs=require('fs')

let content='This is the content of file that i am writing'

fs.writeFile('newText.txt',content,(err)=>{
    console.log(err)
})