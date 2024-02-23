const fs = require("fs");

const cleanString = (str) => {
  let str1 = str.replace(/\s+/g, " ");
  return str1;
};

fs.readFile("example.txt", "utf-8", (err, data) => {
  const initData = data;
  const filteredData = cleanString(initData);

  fs.writeFile("example.txt", filteredData, () => {
    console.log("Data filtered");
  });
});
