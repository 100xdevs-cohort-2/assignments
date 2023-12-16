const fs = require("fs");

function ReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("removeSpace.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("File read successfully");
      resolve(data);
    });
  });
}
function Write(data) {
  return new Promise(function (resolve) {
    fs.writeFile("removeSpace.txt", data, "utf8", (err) => {
      if (err) throw err;
      console.log("File write successfully");
      resolve(data);
    });
  });
}
function RemoveSpace(data) {
  return data.replace(/ +/g, " ");
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
