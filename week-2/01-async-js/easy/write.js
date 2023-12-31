const fs = require("fs");
fs.writeFile("write.txt", " Hello World", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File has been written successfully.");
});
