const fs = require("fs");

fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) {
    console.log("err", err);
  }
  data = data.replace(/\s+/g, " ");
  fs.writeFile("./test.txt", data, (err) => {
    console.log(err);
  });
});
