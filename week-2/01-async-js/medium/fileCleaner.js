const fs = require("fs");
const path = "./test1.txt";

fs.readFile(path, "utf-8", (err, data) => {
    if(err){
        console.log("Unable to read File", err);
        return;
    }
    let split_data = data.split(" ");
    let clean_data = "";
    for(let i=0; i<split_data.length; i++){
        if(split_data[i] != ""){
            clean_data += split_data[i] + " ";
        }
    }
    console.log("Reading Completed");
    // Writes the cleaned data
    fs.writeFile(path, clean_data, 'utf-8', (err) => {
        if(err){
            console.log("Unable to write to file");
            return;
        }
        console.log("Writing completed");
    })
});
