const fs = require('fs');

fs.writeFile(
   'a.txt',
   'This is additional data',
   { flag: 'a' },
   (err, data) => {}
);

fs.readFile('a.txt', 'utf-8', (err, data) => {
   console.log(data);
});
