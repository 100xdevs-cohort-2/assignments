const fs = require("fs")

let fileReadFunc = () => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
        if (err) console.log(err)
        console.log(data)
    })
}

fileReadFunc()

let a = 0;
for (let i = 0; i < 10000000000; i++) a += 1;
console.log("a = ", a)