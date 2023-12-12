const fs = require('fs')



let clearedfile;
let filePath = 'week-2/01-async-js/medium/file-withWhiteSpaces.txt'

fs.readFile('filePath', 'utf-8', (err, data) => {
    clearedfile = data
    clearedfile = clearedfile.replace(/\s\s+/g, " ");
    fs.writeFile('week-2/01-async-js/medium/file-withWhiteSpaces.txt', clearedfile, (err) => {
        console.log(`SuccessFully cleared the file : ${filePath} `)
    })
})