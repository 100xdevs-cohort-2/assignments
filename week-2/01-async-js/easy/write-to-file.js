const fs = require('fs');
const content = 'This was added later';

fs.writeFile('../../02-nodejs/files/a.txt', content, { flag: 'a+' }, (err) => {
  if (err) {
    console.log('🚀 ~ err:', err);
  }
});
