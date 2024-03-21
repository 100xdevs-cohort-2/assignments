const fs = require('fs');

const readFileAndPrint = () => {
    const filePath = "./3-read-from-file.md";
    fs.readFile(filePath, "utf-8",(err, data) => {
        // Run after file read.
        if(err){
            console.error(`Error reading file : ${err}`);
        }else{
            console.log(`File contents are:`);
            console.log(data);
        }
    });
    expensiveAction();
}

const expensiveAction = () => {
    console.log("Expensive operation started");

    for(let i = 0; i<10000000000; i++){

    }

    console.log("Expensive operation finished");
}

readFileAndPrint();