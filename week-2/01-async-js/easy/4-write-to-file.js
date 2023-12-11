const fs = require('fs');

fs.writeFile('a.txt', 'This is additional data', { flag: 'a' }, (err) =>
   console.log(err)
);

fs.readFile('a.txt', 'utf-8', (err, data) => {
   console.log(data);
});
