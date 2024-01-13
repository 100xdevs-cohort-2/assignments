// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const update = "update data !!!";
fs.writeFile("file2.txt",update,function(err,data){
    if(err){
        console.log("error found")
    }else{
        console.log("done");
    }
    
})