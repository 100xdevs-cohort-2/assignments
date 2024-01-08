const fs = require('fs').promises;

const cleaner = async (path) => {
  try {
    let fileData = await fs.readFile(path, 'utf-8');
    console.log("The data is read");

    let newData = await fileData.replace(/\s+/g, ' ');

    await fs.writeFile(path, newData);
    console.log("File write executed");
  } catch (err) {
    console.error("Error: " + err.message);
  }
};

let path = 'fileCleaner.md';
cleaner(path);
