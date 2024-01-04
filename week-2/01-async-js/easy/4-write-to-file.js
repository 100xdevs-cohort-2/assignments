// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require('fs');

let currentDate = new Date();

let output = `
-----------current date-----------
Date: ${currentDate.getDate()}
Month: ${currentDate.getMonth() + 1}
Year: ${currentDate.getFullYear()}
Hours: ${currentDate.getHours()}
Minutes: ${currentDate.getMinutes()}
Seconds: ${currentDate.getSeconds()}
----------------------------------
`

fs.writeFile('./file-write.txt', output, { flag: 'a+' }, err => {});