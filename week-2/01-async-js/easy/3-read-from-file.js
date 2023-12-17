/**
 * Read contents from file
 */

const fs = require('fs')

const filePath = 'a.txt'

console.log('Before reading file.')

fs.readFile(filePath, 'utf-8', (err, data) => {
  console.log('While reading file.')
  if (err) {
    console.log(`Error reading file: ${err}`)
  }

  console.log(`File data: ${data}`)
})

console.log('After fs.readFile()')

let a = 0
for (let i = 0; i < 100000; i++) {
  a *= i
}

console.log(`End of expensive operation: ${a}`)
