const fs = require("fs");

function fileReadWrite(file, read_cb, write_cb) {
  console.log("In fileReadWrite");
  // read the file contents first
  fs.readFile(file, "utf-8", (err, data) => {
    console.log("In readFile");
    read_cb(data);
    contents = data + "\n" + "New line added";
    fs.writeFile(file, contents, () => {
      console.log("In writeFile");
      write_cb();
    });
  });
}

function read_cb() {
  console.log("read the file contents");
}

function write_cb() {
  console.log("written a new line to the file");
}

fileReadWrite("sample.txt", read_cb, write_cb);
