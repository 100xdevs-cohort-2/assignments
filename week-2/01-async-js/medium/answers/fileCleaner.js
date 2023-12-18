const fs = require("fs");
const path = "./sample.txt";
const removeSpaces = (str) => {
  let res = str.split(" ");
  const filtered = res.filter((ch) => ch.trim() !== "");
  return filtered.join(" ");
};
fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(removeSpaces(data));
});
