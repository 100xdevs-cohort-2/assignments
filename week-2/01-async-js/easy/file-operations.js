const fs = require("fs");

fs.readFile("week-2/01-async-js/easy/file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);

  setTimeout(() => {
    console.log("Expensive operation completed.");
  }, 2000);

  fs.writeFile(
    "week-2/01-async-js/easy/file.txt",
    "Hello, world!",
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File written successfully.");
    }
  );
});
