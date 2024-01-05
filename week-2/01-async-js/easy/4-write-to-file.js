const fs = require('fs');
const content = "This is example content that is written to this file.";

/**
 * Writes content to the specified file path. Add content to the end of the file.
 *
 * @param {string} filePath - The path of the file to write to.
 */
const writingFile = (filePath) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File written successfully");
    });
}

writingFile(`easy/4-write-to-file.md`)