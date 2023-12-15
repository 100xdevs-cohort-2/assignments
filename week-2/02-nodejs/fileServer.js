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
const { log } = require('console');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', function(req, res) {
  fs.readdir(path.join(__dirname, './files/'), (err, files)=>{
    if(err){
      res.status(500).json({error: "Error Retrieving the files"})
    }
    res.json(files)
  })
})

app.get('/files/:filename', function(req, res){

  const filePath = path.join(__dirname, './files/', req.params.filename)

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
      res.status(404).json({error: "File not found"})
    }
    res.status(200).send(data)
  })
})

app.all('*', (req, res)=>{

  res.sendStatus(404).json({error: "file not found"})
})
app.listen(3000, () => {
  log("server is running on http://localhost:3000")
})


module.exports = app;