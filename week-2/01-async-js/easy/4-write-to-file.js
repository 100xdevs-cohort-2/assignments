const fs = require("fs");
const { resolve } = require("path");

data = "This is written from script to file.";
/*
// ==== Async Function ====
fs.writeFile("4-text-file.txt", data, "utf-8", function (err) {
  if (err) {
    throw new Error("Write failed => " + err);
  }
  console.log("File is saved.");
});

*/

// ==== Promise Syntax ====
function tanishqWriteFile() {
  return new Promise(function (resolve, reject) {
    // ==== Async Function ====
    fs.writeFile("4-text-file", data, "utf-8", function (err) {
      if (err) {
        reject(new Error("Write failed => " + err));
      }
      resolve("saved");
    }); 
  })
}

// Calling promise
tanishqWriteFile().then(function (data) {
  console.log("File saved. resolve = " + data);
}, function (err) {
  console.log("File not saved. err = " + err);
})


// Expensive Operation afterwards
console.log("Text in script");
var x = 0;
for(var i=0; i<1000000000; i++) {
  x ++;
}
console.log("After loop");