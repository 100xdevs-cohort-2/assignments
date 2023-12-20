let fs = require("fs");

let data = "This sentence will be written to the file";

fs.writeFile("a.txt", data, (err) => {
  if (err) console.log(err);
  else {
    console.log("Contents after writeFile:\n");
    console.log(fs.readFileSync("a.txt", "utf-8"));
  }
});
