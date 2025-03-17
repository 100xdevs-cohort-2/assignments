const fs = require('fs')

fs.readFile('3-read-from-file.md','utf8',function(err,data){
    console.log("File Data Before Write Operation:",data);
});
const data="Hello writing new data in File"
fs.writeFile('3-read-from-file.md',data,'utf8', function(err) {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File written successfully");
    });



console.log("END"); 