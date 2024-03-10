const fs = require('fs');

/*
// ==== Callback Syntax ====
fs.readFile("3-text-file.txt", "utf-8", (err, data) => {
  onDone(data); // => Call to another function
})
*/

// Function
function onDone(data) { 
  console.log("OnDone : Data = "+data);
}

// ==== Promise Syntax ====
function tanishqReadFile(fileName) {
  // promise syntax
  return new Promise(function(resolve, reject) {
    // file reading logic
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) {
        reject(new Error ("Tanishq error : " + err)) // => To reject the output of promise i.e. throw error for aync function
      }
      else {
        resolve(data); // => To resolve the output of aync function
      }
    });
  })
}

// Calling Promise
tanishqReadFile("3-text-file.txt").then(result => {
  onDone(result);
  console.log("Resolve result handled, result = " + result);
}, error => {
  console.log("Reject Error handled, error = " + error);
});

// Expensive Operation afterwards
console.log("Text in script");
var x = 0;
for(var i=0; i<1000000000; i++) {
  x ++;
}
console.log("After loop");