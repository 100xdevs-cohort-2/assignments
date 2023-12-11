const fs = require("fs");
const path = require("path");

const data = "This is a new paragraph, this paragraph is short!!";

fs.writeFile(path.join(__dirname, "3-read-from-file.txt"), data, () => {
  console.log("write file successfully!!");
});
