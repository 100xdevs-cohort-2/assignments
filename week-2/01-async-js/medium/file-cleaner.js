const fs = require('fs');

fs.readFile('../../02-nodejs/files/a.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let cleanedData = data.replace(/\s+/g, ' ').trim();
    fs.writeFile('../../02-nodejs/files/a.txt', cleanedData, (err) => {
      if (err) {
        console.log('🚀 ~ fs.writeFile ~ err:', err);
      } else {
        fs.readFile('../../02-nodejs/files/a.txt', 'utf-8', (err, data) => {
          if (err) {
            console.log('🚀 ~ fs.readFile ~ err:', err);
          } else {
            console.log('🚀 ~ fs.readFile ~ data:', data);
          }
        });
      }
    });
  }
});
