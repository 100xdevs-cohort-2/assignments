/**
 * File cleaner: given data, remove additional strings and keep only single whitespace.
 */

const fs = require('fs')

const filePath = 'a.txt'

let fileData
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(`Error reading data from a.txt: ${err}`)
  }
  fileData = data

  fs.writeFile(filePath, fileData.replace(/\s+/g, ' '), (err) => {
    if (err) {
      console.log(`Error writing data to file a.txt: ${err}`)
    }
  
    console.log('Data cleaned and written to file.')
  })
})
