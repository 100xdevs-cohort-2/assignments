const fs = require("fs")

const fileName = "readme.txt"
fs.readFile(fileName, "utf-8", (err, data) => {
    const content = data.replace(/\s+/g, ' ');
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.log("Error Occured");
        }
        else {
            console.log("File Written Successfully");
        }
    })
})