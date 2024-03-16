var fs = require('fs');

fs.writeFile('week-2/01-async-js/easy/Q4Test.md','#Hello this is a testing program','utf-8',(err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log('File has been written');
});