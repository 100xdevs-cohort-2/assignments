const fs = require("fs");
const path = "./tmp.txt";
const content = `Line 1 is this
Line 2
Line 3
`;
fs.writeFile(path, content, "utf-8", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File Written succesfully");
});
