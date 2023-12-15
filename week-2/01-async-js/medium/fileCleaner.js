const fs = require("fs");

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const newData = data.replace(/\s+/g, " ");
    fs.writeFile("text.txt", newData, () => {
      console.log("updated the content!");
    });
  }
});
