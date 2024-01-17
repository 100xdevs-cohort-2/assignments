/*
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

// Import the NodeJS module called Express to create a HTTP server.
const express = require("express");
// Import the NodeJS module called filesystem to handle file operations.
const fs = require("fs");
// Import the NodeJS module called path to handle file and directory paths.
const path = require("path");
// Create an instance of express server.
const app = express();

// GET request that returns a list of files present in `./files/` directory.
app.get("/files", function (req, res) {
  // Use the readdir() function of fs module to get the contents of a directory.
  // path.join() method is used to join the specified path segments into one path.
  // __dirname represents the directory name of the current code file.
  fs.readdir(path.join(__dirname, "./files/"), function (err, files) {
    // If there's an error, then the given file directory doesen't exists.
    if (err) {
      // Give response with 500 status code stating the error.
      return res.status(500).json({
        message: "Invalid directory!",
      });
    }
    // If the file directory exists, send the files as response.
    res.json(files);
  });
});

// GET request that returns content of given file by name.
app.get("/file/:filename", function (req, res) {
  // path.join() method is used to join the specified path segments into one path.
  // The third parameter will be the filename present in the parant directory ./files.
  // __dirname represents the directory name of the current code file.
  const filePath = path.join(__dirname, "./files/", req.params.filename);
  // Use the readFile() function to read the contents of the file.
  fs.readFile(filePath, "utf-8", function (err, data) {
    // If there's an error, then the given file doesen't exists.
    if (err) {
      // Give response with 404 status code stating the error.
      return res.status(404).send("File not found");
    }
    // If the file exists, send the file content as response.
    res.send(data);
  });
});

// For other routes apart from above two, return 404.
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

module.exports = app;