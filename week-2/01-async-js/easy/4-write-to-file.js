// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("file.txt", "This is edited through the writefile function in js\n Hello World", (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File written successfully");

        // Read the file asynchronously after writing
        fs.readFile("file.txt", "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
            } else {
                console.log("Reading the file asynchronously");
                console.log(data);
            }
        });

        console.log("Synchronous after reading async")
    }
});

console.log("After the Async write file function");

