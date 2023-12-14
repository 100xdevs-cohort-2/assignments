const fs = require('fs');

fs.writeFile('sample.txt', 'This text is typed through write operation in 4-write-to-file', (err) => {
  console.log('File Write successful');
});

// promisifying the write operation because after fs.writeFile is done I want to print the content of file
const p = new Promise((resolve, reject) => {
  fs.writeFile('sample.txt', 'This text is typed through write operation in 4-write-to-file', (err) => {
    if (err) {
      reject(`rejected due to error:`, err)
    }
    resolve('File Write successful');
  });
})

p.then(() => {
  fs.readFile('sample.txt', 'utf-8', (err, data) => {
    console.log(data)
  })
})

console.log("before expensive operation")

let a = 0
for (let i = 0; i < 1000000000; i++) {
  a += 1
}

console.log(a)
console.log('after expensive operation')

for (let i = 0; i < 10000000; i++) {
  a += 1
}
console.log(a)
console.log("file contents will be printed after all sync task are done")