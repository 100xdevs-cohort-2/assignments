// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fd = require("fs");
fd.writeFile("./a.txt","hello world!!!", (err)=>{
    if(err)
    {
        console.log(err)
    }
});