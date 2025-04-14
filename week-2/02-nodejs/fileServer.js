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
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const directoryPath = path.join(__dirname, "files");
app.get("/files", (req, res) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send("Error occured while reading the directory");
    } else res.send(files);
  });
});

app.get("/file/:filename", (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, "files", fileName);
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send("Error occured while reading the directory");
      return;
    }
    if (!files.includes(fileName)) {
      res.send("File not found");
      return;
    }
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        res
          .status(500)
          .send("Error occured while reading the contents of the file");
        return;
      }
      res.json(data);
    });
  });
});

// app.listen(3000);
app.all("*", (req, res) => {
  res.status(404);
});

module.exports = app;
