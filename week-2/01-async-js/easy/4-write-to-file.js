// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs');
fs.readFile('C:/Users/User/DevGearBox/100xDevs/Assignments - 100xDevs/assignments100xDevs/week-2/01-async-js/easy/readFromThisFile.txt','utf8',(err, data) => {
    if(err){
        console.error(err);
    }
    else{
        fs.writeFile('C:/Users/User/DevGearBox/100xDevs/Assignments - 100xDevs/assignments100xDevs/week-2/01-async-js/easy/writeToThisFile.txt',data,'utf8',err => {
            if(err){
            console.error("Some error happened while writing the data to the file: "+err);
            }
        });
        console.log("data wrote to the file..!");
    }
});
console.log("READING THE FILE.");