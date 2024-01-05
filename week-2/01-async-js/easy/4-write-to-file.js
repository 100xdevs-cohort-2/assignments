// const fs = require('fs');

// const data = 'Hello, world!';

// fs.writeFile('a.txt', data, function(err) {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

const fs = require('fs');

fs.writeFile("a.txt", 'Some data 23', 'utf-8', (err) => {
    if (err) throw err;
    console.log("Written");
});


// fs.writwFile(filename, data, encoding(optional), function(err){})