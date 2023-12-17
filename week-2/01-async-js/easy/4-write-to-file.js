/**
 * Write to file
 */

const fs = require('fs')

const filePath = 'a.txt'
const data = 'Write this data to a.txt'

console.log('Before writing to file.')

fs.writeFile(filePath, data, (err) => {
  console.log('While writing to file.')
  if (err) {
    console.log(`Error reading file: ${err}`)
  }

  console.log(`File has been written to.`)
})

console.log('After fs.writeFile()')

let a = 0
for (let i = 0; i < 100000; i++) {
  a *= i
}

console.log(`End of expensive operation: ${a}`)
