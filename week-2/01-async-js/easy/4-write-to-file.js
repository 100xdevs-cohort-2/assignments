const fs = require("fs");
const data = "\nWrite file Asynchronously";
fs.appendFile("easy/dummy.txt", data, "UTF-8", (err) => {
    if (err) {
        console.log(err)
    }
})
