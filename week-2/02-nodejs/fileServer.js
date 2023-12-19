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
const { error, log } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());

app.get("/files", (req, res) => {
  try {
    fs.readdir("./files", (err, files) => {
      if (err) {
        console.log(err);
        res.status(500).send("internal server error");
        return;
      } else {
        console.log(files);
        res.status(200).json({ files });
      }
    });
  } catch (error) {
    console.log("some error: ", error);
    res.status(500).send("internal server error");
  }
});

app.get("/files/:filename", (req, res) => {
  const path = `./files/${req.params.filename}`;
  try {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        res.status(404).send("File not found");
        return;
      } else {
        res.status(200).json({ filename: req.params.filename, data: data });
      }
    });
  } catch (err) {
    console.log("something went wrong: ", err);
    res.status(404).send("File not found");
  }
});

//global catch to handle nonexisting routes
app.use((req, res) => {
  console.log("the route you are looking for is not present");
  res.status(404).send("Route not found");
});

// app.listen(3000);

module.exports = app;
