const fs = require("fs");

fs.writeFile("test2.txt", "This is an example of write from fs in node js", err => err && console.log(err));
fs.readFile("test2.txt", "utf-8", (err, data) => {
    err && console.log(err);
    data && console.log(data);
});