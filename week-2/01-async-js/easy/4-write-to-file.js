const fs = require('fs');

function write(path, data){
    fs.writeFileSync(path, data);
}

try{
    write('./week-2/01-async-js/easy/sample.txt', 'world');
} catch(err){
    console.log(err);
}