const fs = require("fs")
async function readFromFile() {
    try {
        await fs.readFile("counterWithOutSetInterval.js", "utf-8", (error, data) => {
            console.log(data);
        })
    } catch (error) {
        console.log(error);
    }
}

readFromFile()

let sum = 0
for (let i = 0; i <= 10000000; i++) {
    sum++
}

