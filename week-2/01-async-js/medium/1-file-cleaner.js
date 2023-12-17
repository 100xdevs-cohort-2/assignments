const fs = require('fs');
const filePath = 'sample.txt'; // Replace with your file path

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Replace multiple spaces with a single space
    let processedContent = data.replace(/\s+/g, ' ');

    // Write the processed content back to the file
    fs.writeFile(filePath, processedContent, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File cleaned and saved successfully.");
    });
});
