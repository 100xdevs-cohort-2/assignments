const fs = require("fs")

fs.readFile("1-file-cleaner-read.txt", "utf8", (_err, data) => {
    const cleanedData = data.replace(/\s+/g, ' ')

    fs.writeFile("1-file-cleaner-write.txt", cleanedData, (_err) => {
        console.log("File cleaned successfully!")
    })
})

