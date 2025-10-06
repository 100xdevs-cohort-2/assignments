const fs = require("fs");
const path = require("path");

console.log("start");

const filepath = path.join(__dirname, "sample.txt");

fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file :", err);
        return;
    }
    console.log("file data \n", data);
})

console.log("after start reading file");

function expence(iter) {
    let sum = 0;
    for(let i = 0; i<iter; i++) {
        sum += i;
    }
    console.log("operation done :", sum);
}

expence(1e8);

console.log("end");