const fs = require("fs");

fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log("log read data: ", data);
  const content = data + " pass - 2iu32yyyiy3iyi";
  fs.writeFile("text.txt", content, function (err) {
    console.log(content);
  });
  fs.readFile("text.txt", "utf-8", (err, data) => {
    console.log("data with both opp: ", data);
  });
});
