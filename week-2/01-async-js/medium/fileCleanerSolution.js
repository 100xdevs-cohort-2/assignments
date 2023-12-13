// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

function readFromFile() {
    return new Promise(function (resolve) {
        fs.readFile("cleanThis.txt", "utf-8", function (err, data) {
            if (err) {
                console.log("Error encountered");
                throw err;
            }
            else {
                console.log("File read successfully");
                resolve(data);
            }
        })
    })
}

function writeToFile(data) {
    return new Promise(function (resolve) {
        fs.writeFile("cleanThis.txt", data, { encoding: "utf-8" }, function (err) {
            if (err) {
                console.log("Error encountered");
                throw err;
            }
            else {
                console.log("Content written to the file successfully");
                resolve(data);
            }
        })
    })
}

function removeSpace(data) {
    return data.replace(/\s+/g, " ");
}

function onDone(data) {
    console.log(data);
}


async function main() {
    let data = await readFromFile();
    data = removeSpace(data);
    await writeToFile(data);
    onDone(data);
}

main();