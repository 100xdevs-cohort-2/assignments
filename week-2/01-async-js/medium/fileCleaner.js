const fs = require("fs");

fs.readFile("./files/cleanFile.txt",{encoding:"utf-8"}, (err, data) => {
    if(err) {
        throw new Error("Error while reading the file: "+err);
    }

    let resultData = '';
    for(let iter = 0; iter < data.length; iter++) {
      let ch = data.charAt(iter);
      if(!resultData.length && ch == ' ') {
        continue;
      } else if(ch == ' ') {
        resultData += ' ';
        while(ch == ' ') {
            iter++;
            ch = data.charAt(iter);
        }
        resultData += ch;
      } else {
        resultData += ch;
      }  
    }

    fs.writeFile("./files/cleanFile.txt", resultData, {flag:"w+"}, (err) => {
        if(err) {
            throw new Error("Could not write to file!"+err);
        }
    })
})