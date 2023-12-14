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
function removeExtraSpaceFromFile(filePath){
    let result;
    fs.readFile(filePath,(err,data)=>{
        if(err) throw new Error("Error");
        let str= data.toString() ;
        let finalString="";
        for(let i=0;i<str.length;i++){
            if(str[i]==" "&&(str[i+1]!=" ")&&(i+1)<str.length)
                finalString+=" ";
            else if(str[i]!=" ")
                finalString+=str[i];
        }//finalString= data.replace(/ +/g,' ')
        result=finalString;
    fs.writeFile(filePath,result,(err,data)=>{
        if(err) throw new Error("ERROR 404 : File Not Found");
        console.log(result);
    })
      
    })
}
removeExtraSpaceFromFile('sample.txt');