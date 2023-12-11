// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

const fs=require('fs')

fs.readFile('input.txt','utf-8',(err,data)=>{
    let arr=data.trim().split(/\s+/)
    let str=arr.reduce((str,ele)=>str+=ele+" ",'');
    fs.writeFile('output.txt',str,(err)=>{ err && console.log(err) })

})