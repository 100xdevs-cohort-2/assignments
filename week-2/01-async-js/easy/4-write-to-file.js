// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let data = "this is the data to be written in data.txt";

fs.writeFile("./week-2/01-async-js/easy/data.txt", data, (err) => {
    if(err){
        console.log("error occured!");
    }
    else{
        console.log("file written succesfully. following contents has been written:");
        console.log(fs.readFileSync("./week-2/01-async-js/easy/data.txt", "utf8"));
    }
});

let a = 1;
for(let i=0; i<100000; i++){
    a++
    console.log(a);
}

console.log("after expensive operation");