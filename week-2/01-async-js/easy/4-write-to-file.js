const { isUtf8 } = require("buffer");
const fs = require("fs");
const filepath = "c:/Users/WIN 10/Desktop/Cohort-assignments/week-2/01-async-js/easy/file.txt";

const dataToWrite = "Rewrite the data for week-2 easy-2 assignment"

fs.writeFile(filepath,dataToWrite,'utf8',(err) =>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("Data update");
})

// for reading
// fs.readFile(filepath, 'utf8',(err,data) =>{
//     console.log(data);
// });
