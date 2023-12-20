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


function getFileNames() {
  return new Promise(function (resolve) {
    fs.readdir(path.resolve("./files/"), function(err, files) {
      if (err) {
        reject("Internal server error")
      } else {
        resolve(files);
      }
    })
  })
}

function readTextFromFile(fileName) {
  return new Promise(function (resolve, reject) {
    console.log("File Path = " + path.resolve("./files/", fileName))
    fs.readFile(path.resolve("./files/", fileName), 'utf-8', function(err, data){
      if (err) {
        if (err.code == "ENOENT") {
          // console.log(err)
          reject("File not found");
        } else {
          reject("Internal server error")
        }
      } else {
        resolve(data);
      }
    })
  })
}

app.get("/files", function(req, res) {
  getFileNames().then(function (data) {
    let fileArray = data;
    res.status(200).json(fileArray);
  }, function (err) {
    res.sendStatus(500);
  })
})

app.get("/file/:filename", function(req, res) {
  // console.log("filename="+req.params.filename)
  readTextFromFile(req.params.filename).then(function (data) {
    let fileContents = data;
    res.status(200).send(fileContents);
  }, function (err) {
    res.status(404).send(err);
  })
})


app.get("*", function (req, res) {
  res.status(404).send("Route not found");
})

// app.listen(4000);
module.exports = app;