const fs = require("fs");

fs.readFile("before.txt", "utf-8", (err, data) => {
    err && console.log(err);
    data && fs.writeFile("after.txt", data.split(" ").filter((word) => Boolean(word)).join(" "), err => err && console.log(err));
});