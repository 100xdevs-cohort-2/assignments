// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs= require('fs');

function write(content){
    fs.writeFile('a.txt', content, function(){
        console.log("writing done");
    })
}

write("Hello people of new orlean");