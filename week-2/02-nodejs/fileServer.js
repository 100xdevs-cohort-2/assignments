/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/`
     directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found.
     Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

function read_dir() {
  return new Promise((resolve, reject) => {
    fs.readdir("./files", function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

app.get("/files", async (req, res) => {
  try {
    let file_list = await read_dir();
    console.log(file_list);
    res.json(file_list);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

function read_file(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(`./files/${filename}`, "utf-8", (err, data) => {
      if (err) {
        reject("File not found");
      }
      resolve(data);
    });
  });
}

app.get("/file/:filename", async (req, res) => {
  const filename = req.params.filename;
  console.log(filename);
  let content = await read_file(filename).catch((err) => {
    res.status(404).send(err);
    return;
  });
  res.status(200).send(content);
});

app.all("*", function (req, res) {
  res.status(404).send("Route not found");
});

app.use(function (err, req, res, next) {
  res.status(500).send("Internal server error");
});

// app.listen(3000, () => {
//   console.log("Server started at port:3000");
// });

module.exports = app;
