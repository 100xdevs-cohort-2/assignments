const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3000;

app.get('/files', (req, res) =>{
  fs.readdir(path.join(__dirname, './files/'), (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.json(files);
  })
})

app.get('/file/:filename', (req, res) =>{
  const filepath = path.join(__dirname, './files/', req.params.filename);

  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.send(data);
  })
})

app.get('*', (req, res) =>{
  res.status(404).send('Route not found');
})

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// })

module.exports = app;