const fs = require('fs');

let s = " This is a string.";


fs.appendFile('a.txt', s, (err) => {
    if(err){
        throw new Error(err);
    }else{
        console.log("operation successful");
    }
});
