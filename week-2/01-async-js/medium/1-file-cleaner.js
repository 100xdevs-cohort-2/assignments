const fs = require('fs');

fs.writeFile('a.txt','Hi        this         is            a                       spaced          file',(err)=>{
    if(err){
        console.error("Error is "+ err);
    }
})

fs.readFile('a.txt', 'utf-8', (err,data)=>{
    if (err){
        console.error("error is :" + err);
        return;
    }
    const newData = data.split(" ").filter(str => str !== '').join(" ");
    console.log(newData) ;
    fs.writeFile('a.txt', newData , (err)=>{
        if (err){
            console.error(err);
        }
    })
})