const { log } = require('console');
const fs = require('fs');
console.log(process.cwd());
function myread() {
  return new Promise(function (resolve) {
    fs.readFile('easy/a.txt', 'utf-8', function (err, data) {
      resolve(data);
    });
  });
}
async function read() {
  let readfile = await myread();
  console.log(readfile);
}
read();
