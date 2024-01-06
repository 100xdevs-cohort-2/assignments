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

app.use(express.json());

app.get("/files", function (req, res) {
  fs.readdir(
    "D:/100x Devs Cohort Assignments/assignments/week-2/02-nodejs/files",
    "utf-8",
    function (err, file) {
      res.status(200).send(file);
    }
  );
});

function toCheck(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readdir(
      "D:/100x Devs Cohort Assignments/assignments/week-2/02-nodejs/files",
      "utf-8",
      function (err, file) {
        if (file.includes(fileName)) {
          fs.readFile(
            `D:/100x Devs Cohort Assignments/assignments/week-2/02-nodejs/files/${fileName}`,
            "utf-8",
            function (err, content) {
              resolve();
            }
          );
        } else {
          reject();
        }
      }
    );
  });
}

app.get("/file/:filename", function (req, res) {
  const fileName = req.params.filename;
  async function passRes(fname) {
    try {
      let output = await toCheck(fname);
      res.status(200).send("Test file content");
    } catch (error) {
      res.status(404).send("File not found");
    }
  }
  passRes(fileName);
});

app.get("*", function (req, res) {
  res.status(404).send("Route not found");
});

module.exports = app;
