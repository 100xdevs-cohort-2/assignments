// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function writeToFile() {
  fs.appendFile(
    "/Users/sonu/Downloads/assignments-master/week-2/01-async-js/easy/a.txt",
    "Hi there from Rohit!!!",
    (error) => {
      if (error) throw error;
      else
        console.log(
          fs.readFileSync(
            "/Users/sonu/Downloads/assignments-master/week-2/01-async-js/easy/a.txt",
            "utf-8"
          )
        );
    }
  );
}
writeToFile();
