const fs = require("fs");

fs.readFile("week-2/01-async-js/easy/file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const cleanedData = data.replace(/\s+/g, " ").trim();

  fs.writeFile(
    "week-2/01-async-js/easy/file.txt",
    cleanedData,
    "utf-8",
    (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("File cleaned successfully!");
    }
  );
});
