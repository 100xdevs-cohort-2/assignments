const fs = require('fs');

fs.readFile("../temp.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error.message);
    } else {
        data = data.replace(/\s+/g, " ")
        writeNewStr(data);
    }
})


function writeNewStr(data) {
    fs.writeFile("../temp.txt", data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Sucesss");
        }
    })
}