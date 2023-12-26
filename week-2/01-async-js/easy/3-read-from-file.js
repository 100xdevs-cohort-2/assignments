const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err === null) {
    const lines = data.split("\n");
    for (let line of lines) console.log(line);
  }
});
