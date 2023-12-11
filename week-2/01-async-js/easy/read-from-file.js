const fs = require("fs");
const path = require("path");
fs.readFile(path.join(__dirname, "3-read-from-file.md"), (err, data) => {
  if (data) console.log(data.toString());
  else console.log("ERRRRROR....");
});

for (let i = 0; i < 10000; i++) {
  console.log(i);
  console.clear();
}
