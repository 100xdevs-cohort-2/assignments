const fs = require("fs");

console.log("Start of Program");
let filePath = "0-1/assignments/week-2/01-async-js/easy/3-read-from-file.md";
fs.readFile(filePath, encoding = "utf8", function(err, data) {
    console.log("Finished ReadFile");
    console.log(data);
})
console.log("After ReadFile and Before Expensive Operation")
let t = 0;
for(let a = 1; a < 1000; a++) {
    t += 1;
}
console.log("End of Program")
