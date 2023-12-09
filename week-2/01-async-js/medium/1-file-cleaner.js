const fs = require('fs')

let data = 'hello   world  my  name  is    Manikanta'
fs.writeFile('1-file-cleaner-test.txt', data, (err)=>{
    if(err) console.error(err);
    else console.log(`${data} is successfully written in the file`);
})

fs.readFile('1-file-cleaner-test.txt', 'utf8', function(error, data){
    if(error) console.error(error);
    data = data.replace(/\s+/g, ' ').trim();
    fs.writeFile('1-file-cleaner-test.txt', data, (err)=>{
        if(err) console.error(err);
        else console.log(`${data} is successfully written in the file`);
    })
});
