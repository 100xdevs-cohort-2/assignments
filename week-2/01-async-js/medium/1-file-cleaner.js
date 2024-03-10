const fs = require("fs");
function tanishqReadFile (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

function tanishqWriteFile (fileName, fileData) {
  return new Promise (function (resolve, reject) {
    fs.writeFile(fileName, fileData, "utf-8", function (err) {
      if(err) {
        reject("File write failed");
      }
      resolve();
    })
  })
}


function cleanContent(data) {
  words = data.split(" ").filter(function (word) {
    if (word != " ")
      return word;
  })
  return words.join(" ");
}


fileName = "1-text-file.txt"
tanishqReadFile(fileName).then(function (oldContent){
  newContent = cleanContent(oldContent);
  tanishqWriteFile(fileName, newContent).then(function (data){
    console.log("File saved.");
  }, function (err) {
    console.log(err);
  })
}, function (err) {
  console.log("File read failed." + err);
})