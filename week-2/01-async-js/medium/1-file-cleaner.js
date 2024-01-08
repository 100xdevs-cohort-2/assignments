const fs = require("fs");

fs.readFile("temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error reading file:", err.message);
  } else {
    fs.writeFile("temp.txt", data.replace(/\s+/g, " "), (err, data) => {
      if (err) {
        console.log("error writing file:", err.message);
      } else {
        console.log("edited file succesfully");
      }
    });
  }
});
