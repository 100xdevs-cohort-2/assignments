const fs = require("fs");

fs.readFile("testFile.md", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
