## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output.  

fs = require("fs");
function readFiles(filePath){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            console.error(`Error reading file: ${err}`)
            return;
        }
        console.log(`File Contents: n\ ${data}`)
    })
    const startTime = Date.now();
    expensiveOpration();
    const endTime = Date.now();
    console.log(`expensive opration took: ${endTime - startTime} milliseconds`);
}
function expensiveOpration(){
    for(let i=1; i<10; i++){
    console.log(i);
    }
}
const fileName = '1-counter.md';
readFiles(fileName);
