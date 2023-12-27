const fs = require("fs").promises;

const filePath = "./medium/testFile.txt";

// Cleaner Way using promises
async function cleanFile(filePath) {
  try {
    const fileData = await fs.readFile(filePath, "utf8");

    const updatedData = fileData.replace(/\s+/g, " ");
    console.log(updatedData);

    const writeFile = await fs.writeFile(filePath, updatedData, "utf8");
  } catch (err) {
    console.log(err);
  }
}

cleanFile(filePath);
