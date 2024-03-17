const fs = require('fs');

fs.writeFile('aw.txt', 'Hello 100xDEVS.com', (err) => {
    if (err){
        console.log(err);
    }
    console.log('The file has been saved!');
}); 

fs.readFile('aw.txt', 'utf-8',function(err , data){
    if(err){
        console.log(err);
    }
    console.log(data);
})
