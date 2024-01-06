const fs = require("fs")

fs.readFile("3-read-from-file.txt", "utf-8", (_err, data) => {
    console.log(data)
})
