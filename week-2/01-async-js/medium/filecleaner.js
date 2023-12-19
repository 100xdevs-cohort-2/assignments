const fs = require('fs');
let trimmedData;
fs.readFile('a.txt', 'utf-8',function(err , data){
    if(err){
        console.log(err);
    }
    console.log(data);
    trimmedData = data.trim().replace(/\s+/g, ' ');
    fs.writeFile('aw.txt', trimmedData, (err) => {
        if (err){
            console.log(err);
        }
        console.log('The file has been saved!');
    })
})

fs.readFile('aw.txt', 'utf-8',function(err , data){
    if(err){
        console.log(err);
    }
    console.log(data);
})