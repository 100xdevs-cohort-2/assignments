const fs = require("fs");

const filePath = "a.txt";

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const removeExtraSpaces = (content) => {
  return content.replace(/\s+/g, " ");
};

const writeFile = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

readFile(filePath)
  .then((fileData) => {
    const cleanedData = removeExtraSpaces(fileData);
    return writeFile(filePath, cleanedData);
  })
  .then(() => {
    console.log("File cleaned and updated successfully.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
