const fs = require("fs")
// import fs from 'fs';

fs.readFile('./file1.txt','utf8',(err,data) => {
  console.log(data.replace(/\s+/g,' ').trim());
  const newData = data.replace(/\s+/g,' ').trim()
  fs.writeFile('./file1.txt',newData,'utf8',(err) => {
    if (err) {
        console.error("some err");
    }
  }
  )
}
)