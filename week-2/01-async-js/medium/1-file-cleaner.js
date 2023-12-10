const fs = require('fs')

function cleanFile(path) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err.message);
            return
        }

        const fileContents = data.toString()

        const parsedContent = fileContents.trim().replace(/\s+/g, " ")

        fs.writeFile(path, parsedContent, (err) => {
            if (err) {
                console.log(err.message);
                return
            }

            console.log('File cleaning success');
        })
    })
}

cleanFile('/home/nikhil/100xdevs-assignments/week-2/01-async-js/medium/file.txt')