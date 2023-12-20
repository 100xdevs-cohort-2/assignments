const fs = require('fs');

fs.readFile("a.txt", 'utf8', function(err,  data) {
    console.log(data);
});

for(let i=0; i<10000000000; i++){
    //Do nothing
    //This for loop is executed before the file data is printed because readFile is async function
}