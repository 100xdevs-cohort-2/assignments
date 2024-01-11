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

const fs = require("fs");
const path = require("path");

function readMyFile(){
    return new Promise(function(resolve){
        fs.readFile(path.resolve(__dirname, "a.txt"), "utf-8", function(err, data){
            resolve(data)
        })
    })
}

function writeMyFile(data){
    return new Promise(function(resolve){
        fs.writeFile(path.resolve(__dirname, "a.txt"), data, function(err){
            resolve(err);
        });
    });
}

function cleanData(data){
    let spaceCount = 0;
    data = data.split("");
    data = data.filter(item => {
        if(item == ' ' && spaceCount == 0){
            spaceCount =1;
            return true;
        }
        else if(item != " ") {
            spaceCount = 0;
            return true;
        }else if(spaceCount == 1 && item == " " ){
            return false;
        }
        console.log(data)
    })
    data = data.join("");
    return data;
}

function cleanMyFileData(){
    readMyFile().then(cleanData).then(writeMyFile);
}

cleanMyFileData();