// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output.  ANS: Nothing happened as such the file got read and logged succesfully.
// Make the expensive operation more and more expensive and see how it affects the output. ANS: The file was not read and logged and had to mannually terminate the task with CTRL+c

const { error } = require('console');
const fs = require('fs/promises');
const path = require('path')
const fileName = "4test.txt"
const filePath = path.join(__dirname, fileName)

fs.readFile(filePath, "utf-8")
.then((data)=> console.log(data))
.catch((err)=>console.error(err))

// Test
// for(let i=0; i<1000000000000000; i++){

// }