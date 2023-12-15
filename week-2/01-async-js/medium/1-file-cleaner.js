const fs = require("fs");

function ReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("b.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("File read successfully");
      resolve(data);
    });
  });
}
function Write(data) {
  return new Promise(function (resolve) {
    fs.writeFile("b.txt", data, "utf8", (err) => {
      if (err) throw err;
      console.log("File write successfully");
      resolve(data);
    });
  });
}

function RemoveSpace(data) {
  return data.replace(/\s+/g, " "); //! regex expression matches with one or more white spaces
}

function onDone(data) {
  console.log(data);
}

// ReadFile().then(RemoveSpace).then(Write).then(onDone);

//async await method
async function main() {
  let data = await ReadFile();
  data = RemoveSpace(data);
  await Write(data);
  onDone(data);
}
main();
