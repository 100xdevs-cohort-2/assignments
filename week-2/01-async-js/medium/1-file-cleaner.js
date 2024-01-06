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
    let ans = '';
    fs.readFile('file.txt' , 'utf-8' , function (err , data) {
        console.log(data);
        let dataArr =data.split(' ');
        let arr = dataArr.filter(d => d.length !== 0);
        ans = arr.join(' ');
        fs.writeFile('file.txt', ans , (err) => {   
            if(err){
                console.log(err);
            } 
            else {
                console.log(ans);
            }
        });  
    })
}

readFile();