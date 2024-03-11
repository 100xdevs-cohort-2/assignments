const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  console.log("Data before modification: ", data);
  let modifiedData = data.replace(/\s\s+/g, " ");
  fs.writeFile("data.txt", modifiedData, function (err) {
    fs.readFile("data.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  });
});
