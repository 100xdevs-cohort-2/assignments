const fs = require("fs");

fs.readFile("a.txt", "utf8", function (err, data) {
let newData = ("   I hate noise and " + data+ "  ");;
console.log(newData);
  modifier(newData);
});

function modifier(data){
  console.log(data.trim());
}