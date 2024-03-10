const fs = require("fs/promises")

const content = "I am Birendra Bohara"

async function writeToFile() {
    try {
        await fs.writeFile("b.txt", content)
    } catch (error) {
        console.log(error);
    }
}

writeToFile()