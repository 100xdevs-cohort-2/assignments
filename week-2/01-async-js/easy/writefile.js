const fs = require("fs");
const path = require("path");

console.log("start");

const filepath = path.join(__dirname, "sample.txt");

fs.writeFile(filepath, "hii you are lazy", "utf-8", (err) => {
    if(err) {
        console.error("this is an error", err);
    }

    console.log("successfull write");
})

console.log("after start writing");

function expense(iter) {
    let sum = 0;
    for(let i = 0; i < iter; i++) {
        sum += i;
    }
    console.log(sum);
}

expense(1e9);

console.log("end");