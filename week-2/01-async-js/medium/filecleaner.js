const fs = require('fs');

fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const cleanedContent = cleanFileContent(data);

  fs.writeFile('a.txt', cleanedContent, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to the file:', writeErr);
      return;
    }

    console.log('File cleaned and updated successfully.' + cleanedContent);
  });
});

function cleanFileContent(content) {
  return content.replace(/\s+/g, ' ');
}
