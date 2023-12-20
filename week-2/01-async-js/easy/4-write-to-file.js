const fs = require('fs');

let data = "Javascript is a single threaded langauage";

fs.writeFile("b.txt", data, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File written successfully");
    }
});

for(let i=0; i<10000000000; i++){
    //Do nothing
    //This for loop is executed before the file written message is displayed because writeFile is async function
    //However file is written already even while thread is in the for loop
}