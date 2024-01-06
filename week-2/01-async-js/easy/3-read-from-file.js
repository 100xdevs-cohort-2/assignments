const fs = require("fs");
const path = require("path");

const fileName = "file.txt";
const filePath = path.join(__dirname, fileName);

function readFile(filePath, encoding = "utf-8") {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      console.error(`Error reading the file: ${err}`);
      return;
    }
    console.log(data);
  });
}

function expensiveVeryExpensive() {
  const maxVal = 1234567890; // make it more expensive
  let i = 0;
  while (i < maxVal) i++;
  console.log("Phew! That was one heck of an expensive task.");
}

readFile(filePath);

expensiveVeryExpensive();
