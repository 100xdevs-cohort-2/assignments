const path = require("path")
const fs = require("fs")

function fileWrite() {
  fs.writeFile(path.join(__dirname, "../temp.txt"), "rewrite   the   file", (err) => {
    if (err) console.log(err)
  })
}

fileWrite()