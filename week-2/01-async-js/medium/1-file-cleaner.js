const fs = require("fs");

(async () => {
  try {
    fs.readFile("./filecleaner.txt", "utf-8", function (err, data) {
      if (err) throw err;

      var newValue = data.replace(/\s+/g, " ").trim();

      fs.writeFile("./filecleaner.txt", newValue, "utf-8", function (err) {
        if (err) throw err;
        console.log("filelistAsync complete");
      });
    });
  } catch (err) {
    console.error(err);
  }
})();
