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
const path = require('path'); // this is default nodeJS path module that we need to when joining the different path 
const app = express();

// route-handlers
app.get("/files", async function(req, res) {
  console.log(__dirname);
  const filePath = path.join(__dirname, "files");

  try {
    const data = await promisedReadingDir(filePath);
    // data will be an array of all the files and directly present inside the folder (files)
    const result = await Promise.all(data.map(file => isOnlyFile(filePath, file)))

    let finalData = result.filter(file => file.isFile === true).map(file => file.fileName);

    res.status(200).json(finalData)
  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
})

// defining route-handler with route params the user will send the request on this route with a variable file 
app.get("/file/:fileName", async function(req, res) {
  const fileName = req.params.fileName;
  const finalPath = path.join(__dirname, "files", fileName);

  try {
    const finalData = await promiseReadFile(finalPath);

    res.status(200).send(finalData)

  } catch (error) {
    res.status(404).send("File not found")
  }
})

app.use(function(req, res) {
  res.status(404).send("Route not found")
})

function promiseReadFile(finalPath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(finalPath, "utf-8", function(err, data) {
      if(err) {
        reject(err);
        return
      }

      resolve(data);
    })
  })
}


function promisedReadingDir(path) {
  return new Promise(function(resolve, reject) {
    // this is an asynchronous task => does not be held on the main thread
    fs.readdir(path, function(err, data) {
      if(err) {
        reject(err);
        return
      } 

      resolve(data);
    })
  })
}

function isOnlyFile(filePath, file) {
  console.log(filePath);
  const finalPath = path.join(filePath, file);
  return new Promise(function(resolve, reject) {
    fs.stat(finalPath, function(err, stat) {
      if(err) {
        reject(err);
        return
      }

      resolve({
        filename: file,
        isFile: stat.isFile()
      })
    })
  })
}

module.exports = app;