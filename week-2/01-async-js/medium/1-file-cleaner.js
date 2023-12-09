const fs = require("fs");

fs.readFile("./Assignment.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file!", err);
    return;
  }
  var answer = data.replace(/\s+/g, " ").trim();
  fs.writeFile("./Assignment.txt", answer, "utf-8", (err) => {
    if (err) console.error("Error Writing to the file");
  });

  console.log(answer);
});
