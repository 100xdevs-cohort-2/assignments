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

fs.readFile("week-2/01-async-js/medium/a.txt", "utf-8", function(data, err){
    if(err){
        console.log("error reading the file");
    }
    else{
        console.log("Data stored in the file: \n", data);

        var newData = data.replace(/\s+/g, " ");

        //Now passing this new data in the write function to append the a.txt file
        fs.writeFile("week-2/01-async-js/medium/a.txt", newData, (newData, err)=>{
            if(err){
                console.log("Error in the writing the new data")
            }
            else{
                console.log("reading the nw data: \n", fs.readFileSync(newData));
            }
        })
    }
})