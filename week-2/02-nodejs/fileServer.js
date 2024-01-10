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
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

function getFileList(filePath) {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      err? reject(err) : resolve(files);
    });
  });
}

function getFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      return err? reject(err) : resolve(data);
    })
  })
}

app.get('/files', async (req, res) => {
  try {
    const fileList = await getFileList('./files')
    res.status(200).json(fileList);
  } catch (error) {
    res.sendStatus(500);
  }
  
})

app.get('/file/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = './files/' + filename;
    const data = await getFileContent(filePath);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("File not found");
  }
})

app.use((req, res) => {
  res.status(404).send("Route not found");
});

module.exports = app;