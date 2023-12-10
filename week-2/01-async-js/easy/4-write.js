const fs = require("fs");
let fileData;
const path = require("path");
function readFileData() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "sample.txt"), "utf8", (err, data) => {
      fileData = data;
      resolve(fileData);
    });
  });
}
function writeFileData() {
  return new Promise((resolve, reject) => {
    let copyright =
      "\n @copyright: written by aditya and this file belongs to him";
    fs.writeFile(
      path.join(__dirname, "sample.txt"),
      (fileData += copyright),
      (err) => {
        resolve("written suceessfully");
      }
    );
  });
}
async function WriteFile() {
  await readFileData();
  console.log(fileData);
  await writeFileData();
  console.log(fileData);
  await readFileData();
  console.log(fileData);
}
WriteFile();
