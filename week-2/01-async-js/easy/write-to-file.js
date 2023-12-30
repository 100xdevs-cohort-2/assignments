const fs = require("fs");

function writeToFile(dataToWrite) {

  fs.readFile("textFile.txt", "utf8", (err, data) => {

      if(err) {
        console.log("Error: ", err);
      }

      data = data + "\n" + dataToWrite;
      console.log("Add some new data")

      fs.writeFile("textFile.txt", data, 'utf-8', function (err) {
        if (err) {
          console.log("Error: ", err);
        }
        console.log("Data written to the file successfully");
      });

      console.log("This will print before writeFile stmt")
  })
}

let dataToAdd = `Hello new 
string is add 
are u happy now.`;

writeToFile(dataToAdd);
