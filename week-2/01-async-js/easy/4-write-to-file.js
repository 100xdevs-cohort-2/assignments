const fs = require("fs")

const newContent = "This is a message written using fs.writeFile \n It overwrites all the text content";
fs.writeFile("./test.txt",newContent , (err) => {
    if(err)
    {
        console.log(err)
    }

    else
    {
        console.log("File is succesfully updated!");
    }
})