const fs = require('fs/promises');

const start  = new Date().getTime();
const readPromise = fs.readFile('file.txt');

readPromise.then((data) => {
    const end = new Date().getTime();

    console.log("Time Elapsed", end - start);

    console.log("Data: ", data);

})