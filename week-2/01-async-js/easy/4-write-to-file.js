// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const content = "written to file writeToFile.txt using JS";

fs.writeFile("writeToFile.txt",content,(err, data)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Written to File Succesfully");
    }
})