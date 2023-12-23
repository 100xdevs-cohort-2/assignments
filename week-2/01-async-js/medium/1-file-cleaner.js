const fs = require("fs");

function fixFile() {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (data) {
      const newData = data.replace(/\s+/g, " ").trim();
      fs.writeFile("a.txt", newData, null, () => {
        console.log("data fixed successfully");
      });
      //   const fixedData = newData.join(" ");
      //   console.log("This is the fixed data", fixedData);
    }
  });
}

fixFile();
