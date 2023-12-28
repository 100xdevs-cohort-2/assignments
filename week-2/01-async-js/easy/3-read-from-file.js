const fs = require("fs");

function waitOneSecond(count) {
  let wait = new Promise(function (resolve) {
    setTimeout(() => {
      resolve(count + 1);
    }, 1000);
  });
  return wait;
}

function readFromTxtFile() {
  const txt = new Promise((resolve) => {
    fs.readFile(
      "assignments/week-2/01-async-js/easy/a.txt",
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

function writeToTxtFile() {
  const txt = new Promise((resolve) => {
    fs.writeFile(
      "assignments/week-2/01-async-js/easy/a.txt",
      "utf-8",
      (err) => {
        if (err == null) {
          resolve("NO_ERROR");
        }
      }
    );
  });
  return txt;
}

function appendToTxtFile() {
  const txt = new Promise((resolve) => {
    fs.writeFile(
      "assignments/week-2/01-async-js/easy/a.txt",
      "utf-8",
      { flag: "a" },
      (err) => {
        if (err == null) {
          resolve("NO_ERROR");
        }
      }
    );
  });
  return txt;
}

async function read() {
  await readFromTxtFile();
}

async function append() {
  let x = await appendToTxtFile();
  if (x == "NO_ERROR") {
    console.log("FILE APPENDED");
  } else {
    console.log("ERROR APPENDING");
  }
}

async function write() {
  let x = await writeToTxtFile();
  if (x == "NO_ERROR") {
    console.log("FILE WRITTEN");
  } else {
    console.log("ERROR Writing");
  }
}

async function readAndPrint() {
  read();
  await waitOneSecond();
  write();
  await waitOneSecond();
  read();
  await waitOneSecond();
  append();
  await waitOneSecond();
  read();
}

readAndPrint();

// module.exports = wait;
