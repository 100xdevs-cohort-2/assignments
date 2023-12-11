const fs = require("fs");

const filePath = "D:/100x-Cohort/assignments/week-2/01-async-js/tempFile.txt";

function expensiveFn(n) {
  let a = 0;
  for (let i = 0; i < n; i++) {
    a += i;
  }
  console.log(a);
}

fs.writeFile(filePath, "Testing writing", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("Successfully update in the file.");
});

// expensiveFn(100000000);
