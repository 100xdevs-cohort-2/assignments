const fs = require("fs");

function removeExtraSpaces() {
  fs.readFile("textFile.txt", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    }

    data = data.trim();
    let end = 0;
    let newData = "";

    // console.log(data);

    while (end < data.length) {

      if(newData.length > 0 && (newData[newData.length-1]===' ' && data[end]===' ') || (newData[newData.length-1]==='\n' && data[end]===' ')) {
        end++;
        continue;
      }
      
      newData += data[end];
      end += 1;
    }

    // console.log(newData);

    fs.writeFile("textFile.txt", newData, "utf-8", function (err) {
      if (err) {
        console.log(err);
      }
      console.log("File updated");
    });
  });
}

removeExtraSpaces();
