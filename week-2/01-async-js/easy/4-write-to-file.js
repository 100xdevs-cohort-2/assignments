const fs = require("fs");

function writeFile() {
  fs.writeFile(
    "a.txt",
    "Helllllllllllllllllloooooooooooooo into a.txt",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Written Succesfullly !!");
      }
    }
  );
}

function sum() {
  let ans = 0;
  for (let i = 0; i < 10000000000; i++) {
    ans += i;
  }

  console.log(ans);
}

writeFile();
sum();
