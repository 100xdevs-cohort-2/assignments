const fs = require("fs");

function removeExtraSpace(fileName) {
    try {
        //read content of the file
        let fileContent = fs.readFileSync(fileName, "utf-8")

        // Remove extra white spaces using regular expression
        modifiedFileContent = fileContent.replace(/\s+/g, ' ');

        // Write the modified content back to the file
        fs.writeFileSync(fileName, modifiedFileContent, 'utf-8');

        console.log(`Extra white spaces removed from ${fileName}`);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
    }

}

removeExtraSpace('a.txt')
