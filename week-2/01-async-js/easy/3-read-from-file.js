const fs = require("fs");

fs.readFile("test1.txt", "utf-8", (err, data) => {
    console.log(data);
});