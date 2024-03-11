const fs = require('fs')

const content = "Chalo chalein Neel gagan ko, Padosi ki beti se baat karne"

fs.writeFile("a.txt", content, (err) =>{
  if(err){
    console.log("Hello, error!!")
    return;
  }
  console.log("Content written in the fileeeee")
})

const addContent = "IPL, LALIGA, KLPD, AI/ML, BPL(bum pe laat)"

fs.appendFile("a.txt",addContent, (err) =>{
  if(err){
    console.log("Hello, Error !!")
    return;
  }
  console.log("File appended")
})
