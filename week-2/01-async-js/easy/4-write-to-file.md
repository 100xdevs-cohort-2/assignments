## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

fs = require('fs');
function writeToFile(FilePath, Content){
    fs.writeFile(FilePath, Content, 'utf8', (err)=>{
        if(err){
            console.error(`Error writing to file: ${err}`)
            return;
        }
        console.log("File Successfully Written");
    })
}
const fileName = '4-writeFileCode';
const contents = 'text from 4-write-to-file.md';

writeToFile(fileName, contents);