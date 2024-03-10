const fs = require("fs");
function myWriteFile() {
  return new Promise(function (resolve) {
    fs.writeFile("test.txt", "Writing this to test.txt", function (err) {
      if (!err) {
        resolve("writen successfully!");
      }
    });
  });
}
myWriteFile().then(function (data) {
  console.log(data);
});
