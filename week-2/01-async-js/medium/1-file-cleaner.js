const fs = require("fs");

function cleanFile(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    const lines = data.split("\n");

    const cleanedLines = lines
      .map((line) =>
        line
          .split(" ")
          .filter((word) => word !== "")
          .join(" ")
      )
      .join("\n");
    fs.writeFile(path, cleanedLines, (err) => {});
  });
}

cleanFile("../easy/sample.txt");
