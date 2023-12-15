const fs = require('fs');

fs.writeFile('path/to/output.txt', 'Hello, world!', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        return;
    }
    console.log("File was written successfully!");
});
