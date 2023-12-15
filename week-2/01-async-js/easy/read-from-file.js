const fs = require('fs');

// import { error } from "console";
// import { writeFile } from "fs";
// fs.readFile("first.txt", "utf-8", function (err, data) {
//     console.log(data);
//   });
  
  let count = 0;
  console.log("before the for loop");
  for (let x = 0; x < 1000000000; x++) {
    count++;
  }
  
  console.log("after the for loop", count);

  let content = "added this line to it 2";
  
  fs.writeFile("first.txt", content, "utf-8", (err) => {
    if (err) {
      console.error("Error writing to file", error);
    } else {
      console.log("File written successfully!");
    }
  });
  
  console.log("Writing in the file...");