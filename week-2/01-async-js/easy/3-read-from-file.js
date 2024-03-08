const fs = require('fs')

console.log('before file read')

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    console.log(data)
})

console.log("before expensive operation")

let a = 0
for (let i = 0; i < 1000000000; i++) {
    a += i
}

console.log(a)
console.log('after expensive operation')

for (let i = 0; i < 10000000; i++) {
    a += 1
}
console.log(a)
console.log("file contents will be printed after all sync task are done")