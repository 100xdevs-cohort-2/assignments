const fs = require("fs")

let filePath = "0-1/assignments/week-2/01-async-js/medium/1-sample-data.txt"
fs.readFile(filePath, encoding = "utf8", function (err, data) {
    console.log("Data read from File :", data);
    data = data.replace(/\s+/g, ' ');
    console.log("Data to be written :", data);
    fs.writeFile(filePath, data, encoding = "utf8", function() {
        console.log("Written data")
    })
})