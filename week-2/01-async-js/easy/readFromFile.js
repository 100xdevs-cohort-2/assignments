const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, content) => {
  console.log(content);
});
