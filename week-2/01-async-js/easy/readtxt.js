const fs = require("fs");

const filePath = "sample.txt";

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    console.log("File Contents:");
    console.log(data);
    performExpensiveOperation(callback);
  });
}

readFileAsync(filePath, () => {
  console.log("Process completed.");
});
