/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

//** In Node.js, the path.join method is part of the built-in path module. It is used to concatenate path segments into a single path. This is especially useful for constructing file paths in a cross-platform manner, as it automatically handles the correct path separator based on the operating system. */

/* 
  In Node.js, the readdir function is part of the built-in fs (File System) module, and it is used to asynchronously read the contents of a directory.
*/

/*
  const path = require('path');
  const directory = '/path/to/your/directory';
  const filename = 'example.txt';
  //** Using path.join to create an absolute file path
  const absoluteFilePath = path.join(directory, filename);

  console.log('Absolute file path:', absoluteFilePath);
*/

app.get('/files', function (req, res) {
  fs.readdir(path.join(__dirname, './files/'), (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.json(files);
  });
});

app.get('/file/:filename', function (req, res) {
  const filepath = path.join(__dirname, './files/', req.params.filename);

  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.send(data);
  });
});

// app.all('*', (req, res) => {
//   res.status(404).send('Route not found');
// });

//for all other routes return status code : 404 with error message
app.use((req, res) => {
  res.status(404).send('Route not found');
});


module.exports = app;