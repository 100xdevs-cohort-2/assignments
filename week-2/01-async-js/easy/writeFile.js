const fs = require("fs");

const cb = () => {
  console.log("done with write content to a file");
};

fs.writeFile(
  "new.txt",
  "this content was written from the fs.writeFile via nodejs",
  cb
);
