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

const port = 3000;


app.get('/files', (req, res) => {

   res.send("working fine ").status(400);
   
});

app.listen(port);
console.log("App is running on Port", port);

const port = 3000;

const readFolderFiles = (folderName, cb) => {
   let filesNames = null;
   fs.readdir(path.join(__dirname, `./${folderName}/`), cb);
   return cb;
}

app.get('/files', (req, res) => {
   const resolve = (err, files) => {
      if (err) return err;
      console.log("Files===========>", files);
   }
   const getFilesPromise = new Promise(resolve)


   const callBack = (err, files) => {
      if (err) return err;
      console.log("Files===========>", files);
   }
   let fileNames = readFolderFiles('files', resolve);
   //callBack();
   getFilesPromise.then(data => console.log("DATA", data));




   // console.log("======================",fileNames);
   // if (fileNames && fileNames.length) {
   //    res.send(fileNames);
   // }
   res.send('Error has occured');
});
app.get('file/:filename', (req, res) => {

})

app.listen(port);
console.log("App is running on Port", port);

module.exports = app;

module.exports = app;