const fs = require('fs');
const content = 'Text has been replaced!';
fs.writeFile('lorem.txt', content, err => {
  if (err) {
    console.error(err);
  }
  else{
    console.log(fs.readFileSync("lorem.txt", "utf8")); 
  }
  // file written successfully
});
