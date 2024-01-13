const fs = require("fs");

const content = "writing into file.";

fs.writeFile("demo.txt", content, (err) => {
  console.log("write successful");
});

console.log("displayed before 'write succcessful'");
