const { error } = require("console");
const fs = require("fs");
const filepath = "C:/Users/WIN 10/Desktop/Cohort-assignments/week-2/01-async-js/medium/file.txt";

fs.readFile(filepath, "utf8", (err, data) => {
  console.log(`Previous data: ${data}`);
  let cleanData = removeExtraSpaces(data);

  fs.writeFile(filepath, cleanData, "utf8", (error) => {
    if (error) {
      console.log(error);
    }
  });

  // to check data
//   fs.readFile(filepath, "utf8", (err, data2) => {
//     console.log(`Rewritten data: ${data2}`);
//   });

});

function removeExtraSpaces(str) {
  return str.replace(/\s+/g, " ");
}
