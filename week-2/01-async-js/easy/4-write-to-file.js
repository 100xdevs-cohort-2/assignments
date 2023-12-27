const fs = require("fs");

// write to a file asynchronouly
const content = "hello everybody this is tirth's space";
fs.writeFile('data.txt', content, "utf8", (err) => {
    if (err) {
        console.error("There is Some Error: ", err);
        return;
    }

    console.log("File is written successfully.");
});

fs.appendFile('data.txt', content, "utf8", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File is Appended Successfully.");
});