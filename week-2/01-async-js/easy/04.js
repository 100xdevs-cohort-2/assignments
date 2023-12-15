const fs = require("fs")

// we have used \r\n to append data in a new line
const data = "\r\nHi, i am added data into the file using node.js"

let writeFileFunc = () => {
    fs.appendFile("a.txt", data, (err) => {
        if (err) console.log(err)
        else console.log("data appended in the file successfully")
    })
}

writeFileFunc()