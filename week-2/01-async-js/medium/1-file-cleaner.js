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

const fs = require('fs');
fs.readFile('C:/Users/User/DevGearBox/100xDevs/Assignments - 100xDevs/assignments100xDevs/week-2/01-async-js/medium/inputFileForFileCleaner.txt','utf8',(err, data) => {
    if(err){
        console.error(err);
    }
    else{
        console.log("Raw Data: "+data);
        let rawContent = data;
        let regex = /\s+/g;
        let formattedContent = data.replace(regex," ");

        console.log("After Formatting: "+formattedContent);
        fs.writeFile('C:/Users/User/DevGearBox/100xDevs/Assignments - 100xDevs/assignments100xDevs/week-2/01-async-js/medium/inputFileForFileCleaner.txt',formattedContent,'utf8',err => {
            if(err){
            console.error("Some error happened while writing back the formatted data to the file: "+err);
            }
        });
        console.log("Formatted data wrote to the file..!");
    }
});
console.log("READING THE FILE.");
