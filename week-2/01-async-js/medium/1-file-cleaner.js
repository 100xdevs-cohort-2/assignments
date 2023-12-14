// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const { error } = require("console");
const fs = require("fs");
const { resolve } = require("path");


function rohitReadsFile() {
  return new Promise(function(resolve){
    fs.readFile(
      "/Users/sonu/Downloads/assignments-master/week-2/01-async-js/easy/a.txt",
      "utf8",
      (error , data) => {
        if (error) throw error;
        resolve(data);
      }
    )
    });
}

async function main(){
    let value = await rohitReadsFile();
    value=value.replace(/\s+/g , " ");
    fs.writeFile(
      "/Users/sonu/Downloads/assignments-master/week-2/01-async-js/easy/a.txt",
      value ,
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
main();
