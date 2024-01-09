const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Assuming 'data' is defined here
  let newString = data.replace(/\s+/g, " ").trim();

  fs.writeFile("a.txt", newString, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File written successfully\n");
    }
  });
});
