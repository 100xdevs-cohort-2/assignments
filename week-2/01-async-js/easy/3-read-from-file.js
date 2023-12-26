let fs = require("fs")

console.log("Opening File")
fs.readFile("./week-2/01-async-js/easy/sample.txt", "utf-8", function (err, data) {
    console.log(data)
})
console.log("Closing File")
console.log("On main thread")
let a = 0;
for(let i=0;i<1e9+7;i++){
    a = a+i;
}
console.log(a);
console.log("Done main thread")
