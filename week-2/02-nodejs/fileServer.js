/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSONtent of given file by name
     Description: Use the filename format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns con from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const exp = require("constants");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
app.use(express.json());

function readContentFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "files", "a.txt"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
}
app.get("/", (req, res) => {
  res.json({
    msg: "file content reader",
  });
});
app.get("/files", (req, res) => {
  const directoryPath = path.join(__dirname, "files");

  // Using a promise to read the directory
  const readDirectory = new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  readDirectory
    .then((files) => {
      // files contains all the file names in the directory
      const fileNames = files.map((file) => {
        return file;
      });
      res.send(fileNames);
    })
    .catch((err) => {
      console.error("Error reading directory:", err);
      res.status(500).send("Error reading files");
    });
});
app.get("/files/:filename", (req, res) => {
  const name = req.params.filename;
  fs.readFile(path.join(__dirname, "files", name), "utf-8", (err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.send(data);
    }
  });
});
readContentFromFile()
  .then((data) => {
    app.post("/", (req, res) => {
      res.send(data);
    });
  })
  .catch((err) => {
    app.post("/", (re, res) => {
      res.json({
        msg: "something went wrong",
      });
    });
  });

app.listen(3000, () => {
  console.log("listening at port 3000");
});
module.exports = app;
