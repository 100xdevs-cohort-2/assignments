//  File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs").promises;

async function cleanseFile() {
    let data = await fs.readFile("content.txt", "utf-8");

    let modified_data = data.replace(/\s+/g, " ");

    await fs.writeFile("content.txt",modified_data,"utf-8");

    let final_data = await fs.readFile("content.txt","utf-8");

    console.log(final_data);
}

cleanseFile();