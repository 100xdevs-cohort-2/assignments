const fs = require('fs');

/**
 * Reads a file from the specified file path and performs an expensive operation.
 *
 * @param {string} filePath - The path of the file to be read.
 */
const readingFile = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("File Content: ");
        console.log(data);

        let startTime = new Date().getTime();
        expensiveFunction();
        let endTime = new Date().getTime();
        console.log("Time taken: " + (endTime - startTime) / 1000 + "s");
    });
}

/**
 * Executes an expensive operation.
 */
const expensiveFunction = () => {
    let iteration = 1e11;
    console.log("Expensive Operation Started......");
    for (let i = 0; i < iteration; i++) {}
    console.log("Expensive Operation Ended.........");
}

// The time for 1e9 iteration is around 0.5s 
// The time for 1e10 iteration is around 11.0s
// The time for 1e11 iteration is around 108.4s

readingFile(`easy/3-read-from-file.md`)