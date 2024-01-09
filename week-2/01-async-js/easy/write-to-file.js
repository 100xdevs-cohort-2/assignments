const fs = require('fs');

const writeToFile = async (data) => {
  fs.writeFile('demo.txt', data, (err) => {
    if (err) {
      console.log(err)
    }
    console.log('File saved')
  })
}

writeToFile('Hello World')
