/**
 * ## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
 */

const fs = require('fs');

let dataDummy = '';
fs.readFile('./dummyData.txt', 'utf8', (err, data) => {
    if (err) throw err;
    dataDummy = data;
    console.log("DATA from File ==================", dataDummy);
});

function expensiveOperaion() {
    let counter = 0;
    for (let i = 0; i < 100000; i++) {
        counter++
    }
    console.log("Conter Value", counter);
    console.log('expensive Operation completed');
}

expensiveOperaion();

/**
 * ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
 */

fs.writeFileSync('./testfile.txt', 'This is a test Data ', (err) => {
    if (err) throw err;
    console.log("DATA is written Sucessfully to File");
});
