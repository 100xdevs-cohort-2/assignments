const fs = require("fs");

function clearFile(path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const newData = data.toString().split(/\s+/).join(" ");
      fs.writeFile(path, newData, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File cleaned");
        }
      });
    }
  });
}

console.log(__dirname);
try {
  clearFile(__dirname + "\\test.txt");
} catch (e) {
  console.log(e);
}
