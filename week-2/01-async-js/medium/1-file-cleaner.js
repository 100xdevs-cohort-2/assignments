const fs = require("fs");

let unclean_data = "";

function cleanText(text) {
  let cleaned_text = text
    .split(" ")
    .filter((word) => word.length > 0)
    .join(" ");

  return cleaned_text;
}

fs.readFile("dirty.txt", "utf8", function (err, data) {
  unclean_data = data;
  console.log(unclean_data);
  let clean_data = cleanText(unclean_data);
  fs.writeFile("clean.txt", clean_data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Clean data written to file");
    }
  });
});
