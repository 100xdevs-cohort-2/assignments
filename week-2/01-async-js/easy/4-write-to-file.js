const fs = require("fs");

fs.writeFile("custom.txt", "this is file data", (err) => {
  if (err) throw err;
});
