const fs = require("fs");

const filePath = "example.txt"; // Replace with the path to your file

// Function to read file contents
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

// Function to remove extra spaces
const removeExtraSpaces = (content) => {
  // Use regular expression to replace multiple spaces with a single space
  return content.replace(/\s+/g, " ");
};

// Function to write content back to the file
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

// Main logic
readFile(filePath)
  .then((fileData) => {
    // Remove extra spaces
    const cleanedData = removeExtraSpaces(fileData);
    // Write cleaned content back to the file
    return writeFile(filePath, cleanedData);
  })
  .then(() => {
    console.log("File cleaned and updated successfully.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
