/**
 * File cleaner
 * Read a file, remove all the extra spaces and write it back to the same file.
 *
 * For example, if the file input was
 * ```
 * hello     world    my    name   is       raman
 * ```
 *
 * After the program runs, the output should be
 *
 * ```
 * hello world my name is raman
 * ```
 */

const fs = require('fs');

fs.readFile('../file.txt', function (err, data) {
    if (err) {
        console.error("error during file open", err);
    } else {
        let oldContent = data.toString();

        let newContent = oldContent.replace(/\s\s+/g, ' ');

        fs.writeFile('../file.txt', newContent, function (err) {
            if (err) {
                console.error(err)
            } else {
                console.log("file cleanup done")
            }
        })
    }
})