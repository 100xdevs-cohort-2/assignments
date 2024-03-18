const fs = require("fs");

let p = new Promise((resolve, reject) => {
  fs.readFile("sample.txt", "utf-8", (err, data) => {
    if (err) reject(`rejected due to error:`, err);
    let updatedData = data.replace(/\s+/g, " ");
    resolve(updatedData);
  });
});

p.then((data) => {
  fs.writeFile("sample.txt", data, (err) => {
    if (err) throw new Error(err);
    console.log("file updated successfully");
  });
});
