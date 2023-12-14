const fs = require("fs");

function cleanFile(textFile){

    // read file
    fs.readFile(textFile, "utf-8", (err, data) => {

        if(err) throw err
            
        let result = textCleaner(data);

        // write file 
        fs.writeFile(textFile, result, (err) => {
            if(err) throw err
            console.log("saved!");
            console.log("File Content:-\n", result);
        })
    })
    
}

function textCleaner(string) {

    // we convert the string to an array of by spilitting it 
    // Then we filter out the elements of the array that are whitespaces ' '
    // finally we join the array to a string by single spaces

    let result = string.split(" ").filter((character) => character !== '').join(" ");
    return result;

}

cleanFile("./text.txt");
