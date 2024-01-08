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

    function readAndTrim(){
        fs.readFile('a.txt', 'utf-8', (err, data)=>{
            console.log("reading done");
            console.log(data);
            fs.writeFile('a.txt', data.replace(/\s+/g, " "), (err)=>{
                console.log(typeof(data));
                console.log(data);
            });
        });
    }

    readAndTrim();