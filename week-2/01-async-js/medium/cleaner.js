const fs = require("fs");
const path = require("path");
let fileDataWithSpaces;
let cleanStr;
async function removeExtraSpaces() {
  await readFile();
  cleanStr = removeSpaces(fileDataWithSpaces);
  console.log(cleanStr);
  await writeFile();
}
function removeSpaces(inputStr) {
  let result = "";
  let isSpace = false;

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] !== " ") {
      result += inputStr[i];
      isSpace = false;
    } else {
      if (!isSpace) {
        result += inputStr[i];
        isSpace = true;
      }
    }
  }

  return result;
}
function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "sample.txt"), "utf-8", (err, data) => {
      console.log(data);
      fileDataWithSpaces = data;
      resolve();
    });
  });
}
function writeFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, "sample.txt"), cleanStr, resolve);
  });
}
removeExtraSpaces();
