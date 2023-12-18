/*## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/

const fs = require("fs");

fs.writeFile('hi.txt',"so i learned to write to a file using fs lib.",function(err){
    if (err) throw err;
    console.log("File updated");
    fs.readFile('hi.txt',"utf-8",function(err,data){
    if (err) throw err;
    console.log("after updating: " + data);
});
});

