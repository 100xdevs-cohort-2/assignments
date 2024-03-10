const fs = require("fs")
const path = require("path")

function fileCleaner() {
  return new Promise((resolve) => {
    fs.readFile(path.join(__dirname, "../temp.txt"), "utf-8", (err, data) => {
      resolve(data.replace(/\s+/g, " ").trim())
    })
  })
}

fileCleaner().then((cleanedContent) => {
  fs.writeFile(path.join(__dirname, "../temp.txt"), cleanedContent, err => {
    if (err) {
      console.error(err)
    }
  })
})