const fs = require("fs")

fs.writeFile("4-write-to-file.txt", "Entered Data", (_err) => {
    console.log("file saved!")
})

fs.readFile("4-write-to-file.txt", "utf-8", (_err, data) => {
    console.log("Reading from file")
    console.log(data)
})
