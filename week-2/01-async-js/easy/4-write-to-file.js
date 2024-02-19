// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.



const fs = require('fs');
const path = require("path");

function writeMyFile(){
    return new Promise(function(resolve){
        fs.writeFile(path.resolve(__dirname, "a.txt"), "yoyoyo", function(err){
            resolve(err);
        });
    });
}


function onDone(err) {
    console.log(err);
}

var a = writeMyFile()
a.then(onDone);
