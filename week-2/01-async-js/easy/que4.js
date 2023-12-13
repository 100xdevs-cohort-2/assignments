const fs = require("fs");
let d = "This is question 4";

fs.writeFile("a.txt", d, (err) => {
  if (err) throw new Error();
  else {
    console.log("File written successfully");
    fs.readFile("a.txt", "utf-8", (err, data) => {
      if (err) throw new Error();
      else {
        console.log(data);
      }
    });
  }
});
