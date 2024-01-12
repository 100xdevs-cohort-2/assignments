const fs = require("fs");

fs.readFile("a.txt", 'utf-8', (err, data) => {

    if (err) {
        console.error("Error reading the file:", err);
        return;
      }

  console.log(data);

  let trimData = data.split(" ").filter((word) => word !== "" ).join(" ");
  console.log(trimData);
});