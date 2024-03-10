
const fs = require('fs');

let data = "This is done through the JS write File Function"
// const buffer = Buffer.from(data)

fs.writeFile('week-2/01-async-js/easy/files.txt', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File Written Successfully');
  }
})