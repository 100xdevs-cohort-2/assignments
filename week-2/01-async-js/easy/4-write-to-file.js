const fs = require("fs");

const dataToBeAdded = "Hello Universe";

fs.writeFile('a.txt',dataToBeAdded,()=>{
    console.log("Data Written!");
})
