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

fs.readFile("a.txt","utf-8",function (err,data) {
    console.log("Before editing the File");
    //removing Extra space using regular expressions
    data = data.replace(/\s+/g," ");//this syntax is like remembering.

    fs.writeFile("a.txt",data,(err)=>{
        console.log("after editing the file.")
        console.log(data)
    })
})