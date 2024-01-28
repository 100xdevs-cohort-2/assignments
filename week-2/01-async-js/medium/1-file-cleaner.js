const { log } = require("console");
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log("Content in the file a.txt");
  console.log(data + "\n");

  let array = data.split(" ");
  let newData = "";
  array.forEach((word) => {
    // For adding only words to the string i.e removing Null values
    if (word.length > 0) {
      newData += word + " ";
    }
  });
  let finalData = newData.trim(); // To remove 1 extra space at the end...
  console.log("Content to be written on the same file");
  console.log(finalData + "\n");

  fs.writeFile("a.txt", finalData, (err) => {
    if (err) {
      console.log("Error writing to file...");
    } else {
      console.log("File has been written successfully...");
    }
  });
});
