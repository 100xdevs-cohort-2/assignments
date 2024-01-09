const fs = require('fs');

const path = "./example.txt";

function expensiveOperation(){
    console.log("Expensive operation")
}

fs.readFile(path, 'utf-8', (err, data) => {
    if(err){
        console.log("Error reading the file", err);
        return;
    }
    console.log("File content:",data);

    setTimeout(expensiveOperation, 500);
})

console.log("Reading File....");


