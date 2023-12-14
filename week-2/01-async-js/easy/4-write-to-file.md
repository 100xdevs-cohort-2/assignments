## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let data =
"Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks."

fs.writeFile("sample.txt", data,(err) => {
    if (err) console.log(err);
    else {
        console.log ("File written successfully\n");
            console.log("The file has the following contents:");

             console.log(fs.readFileSync("sample.txt","utf-8"));
    }
});