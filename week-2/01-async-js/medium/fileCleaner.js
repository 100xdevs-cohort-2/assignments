const fs = require("fs");

const cleanFile = (file) => {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const cleanedContent = data.replace(/\s+/g, " ");

    // console.log(cleanedContent);

    fs.writeFile(file, cleanedContent, "utf-8", (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("File cleaned successfully");
    });
  });
};

cleanFile("b.txt");
