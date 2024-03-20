const fs = require('fs');
// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 
fs.readFile('C:/Users/User/DevGearBox/100xDevs/Assignments - 100xDevs/assignments100xDevs/week-2/01-async-js/easy/readFromThisFile.txt','utf8',(err, data) => {
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
});
console.log("READING THE FILE.");