const fs = require("fs");

fs.readFile("demoRead.txt", "utf-8", (err, data) => {
  const modifiedData = data.replace(/\s+/g, " ");
  console.log(modifiedData);
  fs.writeFile("demoWrite.txt", modifiedData, (err) => {
    console.log("write successful");
  });
});
