const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("extracted data", data);
  const cleanedContent = data.replace(/\s+/g, " ");

  fs.writeFile("a.txt", cleanedContent, "utf-8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
    } else {
      console.log("File cleaned successfully!");
    }
  });
});
