const fs = require("fs");

fs.readFile("./dummyFile.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error("Cannot read file");
  }
  console.log(data);
  const cleanedData = data.replace(/\s+/g, " ");

  fs.writeFile("./dummyFile.txt", cleanedData, (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Data written succesfully");
  });

  fs.readFile("./dummyFile.txt", "utf-8", (err, data) => {
    if (err) {
      throw new Error("Cannot read file");
    }
    setTimeout(() => {
      console.log(data);
    }, 3000);
  });
});


