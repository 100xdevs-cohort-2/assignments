const fs = require("fs");
//let d = "";
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) throw new Error();
  //console.log(data);
  const d = data.replace(/\s+/g, " ").trim();
  fs.writeFile("a.txt", d, function () {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      if (err) throw new Error();
      console.log(data);
    });
  });
});
