// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require('fs');
let data = 'lets check if .writeFile replaces data'
fs.writeFile('./testFile.txt',data, function(err){});
//it does
//fs.appendFile to add data to file without replacing