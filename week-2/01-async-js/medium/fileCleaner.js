const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, content) {
  console.log(content);
  const formattedString = content.split(/\s+/g).join(" ");
  fs.writeFile("a.txt", formattedString, function (err, content) {
    if (err) {
      throw err;
    }
    console.log("Saved");
  });
});
