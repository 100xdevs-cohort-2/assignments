/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 
     Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const { log } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

// Get the path of a directory named 'files' that's in the same directory as the current module file
const filesDirectoryPath = path.join(__dirname, 'files');

app.get("/files", (req, res) => {
  fs.readdir(filesDirectoryPath, (err, files) => {
    if (err)
      return res.status(500).json({ error: 'Failed to retrieve files' });
    res.status(200).json(files)
  })
})

app.get("/file/:filename", (req, res) => {
  const name = req.params.filename;
  const filePath = path.join(filesDirectoryPath, name);
  fs.readFile(filePath, "UTF-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.status(200).send(data);
  })
})

app.get((req, res, next) => {
  res.status(404).send("Route Not found")
})

module.exports = app;