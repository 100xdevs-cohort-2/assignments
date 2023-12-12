// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

let content = "";

fs.readFile("fileCleanerFile.txt","utf-8",(err, data)=>
{
    console.log(data);
    if(err)
    {
        console.log(err);
    }
    else
    {
        data = data.replace(/\s+/g, " ").trim();
        console.log(content);
        fs.writeFile("fileCleanerFile.txt",data,(err)=>
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
    }
})
