const fs = require("fs");

const writeFile = () => {
  fs.writeFile(
    "./4-write-to-file.md",
    "this is the new content",
    "utf-8",
    (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('File updated successfully!');
      }
    }
  );
};

writeFile();
