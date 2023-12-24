// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

async function writeFromFile(fileName){
    const data = "Hey , writing to the file"
  fs.writeFile(fileName, data , "utf-8", (err, data) => {
    try{
        console.log("file added")
    }
    catch(err){
        console.error("error")
    }
  })
}

const fileName = "file.md"

writeFromFile(fileName)