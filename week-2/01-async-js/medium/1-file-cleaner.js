const fs = require('fs')

fs.readFile("a.txt",'utf-8',(err, data)=>{
  if(err){
    console.log("Error, this side")
    return
  }
  const formattedContent = data.replace(/\s+/g,' ')
  fs.writeFile("a.txt",formattedContent.trim(),'utf-8',(err)=>{
    if(err){
      console.log("The error welcomes you!!!")
      return;
    }
    console.log("File content added updated")
  })
})
