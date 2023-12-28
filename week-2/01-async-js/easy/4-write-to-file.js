const fs = require("fs");

console.log("Start of Program");
let filePath = "0-1/assignments/week-2/01-async-js/easy/_data.txt";
let data = "Hey There! I am Manikandan.";
fs.writeFile(filePath, data, encoding = "utf8", function() {
    console.log("Finished WriteFile");
})
console.log("End of Program")
