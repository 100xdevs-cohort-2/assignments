
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
const util = require('util');
const app = express();
//const PORT = 8080;

async function getFilesList(path) {

  const readdir = util.promisify(fs.readdir);
  try {
    const filesList = await readdir(path);
    return filesList;
  } catch(err) {
    throw new Error("Not able to read file");
  }
}

async function getAllFiles(pathToDir) {
  try{
    const filesList = await getFilesList(pathToDir);
    return filesList;
  } catch (err) {
    console.log(err);
  }
}

async function getDataFromFile(path) {
  const readFile = util.promisify(fs.readFile);
  try {
    const data = await readFile(path, 'utf-8');
    return data;
  } catch(err) {
    throw new Error("Not able to read data from file");
  }
}

app.get("/files", async function(req, resp) {
  const pathToDir = path.join(__dirname, "files");
  const filesList = await getFilesList(pathToDir);
  console.log(filesList);
  resp.status(200).json(filesList);
})

app.get("/file/:fileName", async function(req, resp) {
  const fileName = req.params.fileName;
  let fullPath = path.join(__dirname, "files", fileName);
  console.log(fullPath);
  try {
    const data = await getDataFromFile(fullPath);
    resp.status(200).json(data);
  } catch(err) {
    resp.status(404).json(err);
  }
})

app.get("*", function(req, resp) {
  console.log("I am alive");
  resp.status(404).send("404");
})

module.exports = app;