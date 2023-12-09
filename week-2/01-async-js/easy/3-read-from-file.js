const fs = require('fs');

fs.readFile('3-read-from-fil.md', 'utf8', function(err, data){
    console.log(data)
    console.error(err);
});
