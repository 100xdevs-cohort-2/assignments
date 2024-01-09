const fs = require('fs');
const path = require('path');

function fileCleaner() {
  return new Promise(function (resolve) {
    fs.readFile(
      path.join(__dirname, '../easy/a.txt'),
      'utf-8',
      function (err, data) {
        resolve(data.replace(/\s+/g, ' ').trim());
      }
    );
  });
}

async function main() {
  let cleanedFile = await fileCleaner();
  //   console.log(cleanedFile);
  return new Promise(function (resolve, reject) {
    fs.writeFile(path.join(__dirname, '../easy/a.txt'), cleanedFile, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('file Updated Successfully');
      }
    });
  });
}
async function Main() {
  try {
    let finalFile = main();
    //console.log(finalFile);
  } catch (error) {
    console.error(error);
  }
}
Main();
