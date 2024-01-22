## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
const fs = require("fs");
function removeExtraSpaces(filePath,cb){
fs.readFile(filePath,"utf-8",function(err,data)
{
if(err)
{
console.log("error file reading :", err);
return;
}
const modifiedData=data.replace(/\s+/g,' ');
fs.writeFile(filePath,modifiedData,function(err){
if(err)
{
console.log("error file reading :", err);
return;
}
cb();
});
}):
}
const filePath="a.txt";
removeExtraSpaces(filePath,function()
{
console.log("extraspaces removed from file");
}
);
