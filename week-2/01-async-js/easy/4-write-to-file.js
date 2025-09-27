// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs/promises');
const path = require('path')
const fileName = "4test.txt"
const filePath = path.join(__dirname, fileName)
fs.writeFile(filePath, "This the data i am writing to it.\n", "utf-8")
.then(()=> console.log(`File has been written.`))
.catch((err)=> console.error(err))