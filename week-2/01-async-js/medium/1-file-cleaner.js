const fs = require("fs");
const path = require("path");

const readFileTheWriteAsync = () => {
  fs.readFile(
    path.join(__dirname, "1-file-cleaner.txt"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("=========== reading file data ==========");
        console.log("data:::", data);

        data = data.replace(/\s+/g, " ");
        console.log("========= after removing white space ========");
        console.log("data:::", data);

        fs.writeFile(
          path.join(__dirname, "1-file-cleaner.txt"),
          data,
          "utf-8",
          () => {
            console.log("Write file done");
          }
        );
      }
    }
  );
};

readFileTheWriteAsync();
