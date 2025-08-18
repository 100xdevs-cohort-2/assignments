const fs = require('fs');

fs.readFile("b.txt","utf-8",(err,data)=>{
    console.log(data);

    const removeSpace = data.replace(/\s+/g,' ');
    // console.log(removeSpace);
    fs.writeFile("b.txt",removeSpace,'utf-8',(err,data) =>{
        console.log(removeSpace);
    })
})