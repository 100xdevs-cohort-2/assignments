
var fs = require('fs');
fs.readFile("week-2/01-async-js/easy/3-read-from-file.md",'utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
        
});
var sum =0;
for(var i =0; i<100000;i++)
{
    sum++;
}
console.log(sum);

// nothing much happnes the file is always read in parallel but when it comes to calling the callback fucntion it is called at last