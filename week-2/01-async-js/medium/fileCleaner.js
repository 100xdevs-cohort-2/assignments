const fs = require("fs");

fs.readFile("aRead.txt", "utf-8", function(err, data){
    const editedFile = editedFile.replace((/\s+/g, " "))
    console.log(editedFile);
    fs.writeFile("aWrite.txt", editedFile, function(err){
        console.log("write successful.")
    })

})