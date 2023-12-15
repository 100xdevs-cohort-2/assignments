const fs = require("fs")
const dataToWrite = "heeyyyyyy i iii i    looooooo"

for (let i = 0; i < 1000; i++) {

    fs.writeFile("new1.txt", dataToWrite, { flag: 'a' }, (err) => {
        if (err) {
            console.log(err);
        }
    })
}