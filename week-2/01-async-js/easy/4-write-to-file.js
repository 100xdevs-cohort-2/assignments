let fs = require("fs")

console.log("Opening File")
fs.readFile("./week-2/01-async-js/easy/sample.txt", "utf-8", function (err, data) {
    console.log(data)
    data = "hehehehehehe"
    fs.writeFile("./week-2/01-async-js/easy/sample.txt", data, function (err) {
        if(err)console.log(err)
    })
})
console.log("Closing File")
// console.log("On main thread")
// let a = 0;
// for(let i=0;i<1e9+7;i++){
//     a = a+i;
// }
// console.log(a);
// console.log("Done main thread")