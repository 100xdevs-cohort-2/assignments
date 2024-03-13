const fs = require("fs");

function readFromTxtFile() {
  const txt = new Promise((resolve) => {
    fs.readFile(
      "assignments/week-2/01-async-js/medium/a.txt",
      "utf-8",
      (err, data) => {
        if (err) {
          resolve(err);
        }
        resolve(data);
      }
    );
  });
  return txt;
}

function writeToTxtFile(data) {
  const txt = new Promise((resolve) => {
    fs.writeFile("assignments/week-2/01-async-js/medium/a.txt", data, (err) => {
      if (err == null) {
        resolve("NO_ERROR");
      }
    });
  });
  return txt;
}

// async function write() {
//   let x = await writeToTxtFile();
//   if (x == "NO_ERROR") {
//     console.log("FILE WRITTEN");
//   } else {
//     console.log("ERROR Writing");
//   }
// }

async function main() {
  let txtFile = await readFromTxtFile();
  console.log(txtFile);
  txtFile = txtFile.split(" ");
  let newTxtFile = txtFile.filter((item) => {
    return item != "";
  });
  txtFile = newTxtFile.join(" ");
  //   await writeToTxtFile(txtFile);
  console.log(txtFile);
}

main();
