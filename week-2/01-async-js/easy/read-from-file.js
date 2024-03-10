const path = require("path")
const fs = require("fs")

let i = 1
function fileRead() {
  fs.readFile(path.join(__dirname, "../temp.txt"), "utf-8", (err, data) => {
    console.log(data);
  })
  //thread stops here
  while (i < 1000000000000000) {
    // console.log(i)
    i++
  }
}
fileRead()