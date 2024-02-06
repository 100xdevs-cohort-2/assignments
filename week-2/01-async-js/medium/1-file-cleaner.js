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
const fs = require("fs");

fs.writeFile("a.txt" , "hello     world    my    name   is       raman",function(err,data){
    if(err){
        console.log("error occured in writing to the file .");
    }
    console.log("file written successfully .");
});
let text = "";
fs.readFile("a.txt" , "utf8" , function(err , data){

text = data.replace(/\s+/g , ' ');
text = text.trim();
fs.writeFile("a.txt",text , function(err,data){
    console.log("trimmed text written successfully .");
})
});

