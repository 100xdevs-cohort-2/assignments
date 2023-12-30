let fs = require("fs")
let data = "This is new string"
fs.writeFile("file.txt", data, (err)=>{
    console.log("Data written into the file.")
})