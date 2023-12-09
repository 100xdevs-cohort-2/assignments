const fs = require("fs");

const data = "Hello World!"

fs.writeFile("week02\\01-async-js\\easy\\4-write-to-file.md",data,"utf-8",((err)=>{
    if(err) throw new Error("File has alredy been saved")
}))
