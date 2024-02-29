//our task is to write someting on the file 
const fs = require('fs');
fs.writeFile('a.txt','Hello Updating the text form a.text via fs library',function(err){
    // console.log(err);
})

fs.appendFile('a.txt','Updated part is here',function(err){
    console.log(err);
})
fs.readFile('a.txt','utf-8',function(err,data){
    console.log(data);
})
