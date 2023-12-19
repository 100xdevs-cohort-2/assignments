const fs = require("fs");

function fileCleaner() {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        let newOne = data.replace(/\s+/g, ' ');
        fs.writeFile("a.txt", newOne, function(err) {
            console.log(newOne);
        })
    });
}
fileCleaner();