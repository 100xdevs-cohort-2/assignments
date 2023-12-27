const fs = require("fs");

const filePath = "testFile2.md";
const data = "Life is amazing !";

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written !");
    return;
  }
});

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
