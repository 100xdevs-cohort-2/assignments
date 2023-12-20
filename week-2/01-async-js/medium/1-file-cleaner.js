const { rejects } = require("assert");
const fs = require("fs");

function readFilePromisify() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

readFilePromisify().then(function (data) {
  console.log("after read:", data);
  let arr = data.split(" ");
  let arr_str = arr.filter((e) => e != "").join(" ");
  console.log(arr_str);
  fs.writeFile("a.txt", arr_str, function (err) {
    if (err) {
      throw err;
    }
  });
});
