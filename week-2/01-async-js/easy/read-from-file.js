const fs = require('fs');


const redFromFile = async () => {
  fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(data)
    return data
  })
}

redFromFile()
