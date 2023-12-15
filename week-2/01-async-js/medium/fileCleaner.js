const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error : " + err);
  } else {
    const response = data.replace(/\s+/g, ' ');
    console.log(response);
    fs.writeFile("a.txt", response, (err) => {
      if (err) {
        console.log("Error2 : " + err);
      } else {
        console.log("File Modified Successfully !!!");
      }
    });
  }
});
