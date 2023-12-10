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
const fs = require('fs');
function readFile() {
    let ans= '';
    fs.readFile('file.txt' , 'utf-8' , function (err , data) {
        let dataArr = data.split(" ");
        
        for(let i =0;i < dataArr.length;i++) {
           dataArr[i] = dataArr[i].trim();
           if(dataArr[i] === '') {
               dataArr.splice(i,1);
           }
        }

        ans = dataArr.join(' ');
        return ans;
    })
}
console.log(readFile());