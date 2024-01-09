const fs = require('fs');

function writeFile(content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile('easy/a.txt', content, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve('File was written successfully');
      }
    });
  });
}

async function write() {
  try {
    let written = await writeFile('hello its me ');
    console.log(written);
  } catch (error) {
    console.error(error);
  }
}
write();
