const fs = require("fs");

const content = `
hello there mate`;

fs.writeFile("sample.txt", content, (err) => {
  console.log({ err });
});
