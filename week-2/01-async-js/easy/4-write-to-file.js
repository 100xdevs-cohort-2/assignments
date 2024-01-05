const fs = require('fs');
var data = "data is written through 4-write-to-files.js"
fs.writeFile("a.txt", data , "utf8", err => {
    console.log("Data is written")
})

