const fs = require("fs");

const filepath = "./input.txt";

fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
  fs.writeFile(
    "output.txt",
    data.replace(/(?![\r\n])\s+/g, " "),
    function (err, data) {
      console.log("Success");
    }
  );
});
