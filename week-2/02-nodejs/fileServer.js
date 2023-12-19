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

app.get("/files", async (req, res) => {
  // Using callabck  /// Only this is working in test cases because of the spyOn on fs

  fs.readdir("files", (err, files) => {
    if (err) res.status(500).send({ err: "System err" });
    else res.status(200).send({ files: files });
  });

  // Async/Await method

  // try {
  //   const files = await fs.promises.readdir("files");
  //   res.status(200).send({ files });
  // } catch (err) {
  //   res.status(500).send("Inteternal Server Error");
  // }

  // Using then and catch

  // fs.promises
  //   .readdir("files")
  //   .then((filenames) => res.status(200).send({ files: filenames }))
  //   .catch((err) => res.status(500).send({ err: "System err" }));
});

app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  fs.promises
    .readFile(path.join(__dirname + "/files/" + filename))
    .then((data) => res.status(200).send(data.toString()))
    .catch((err) => res.status(404).send("File not found"));
});

app.get("*", (req, res) => {
  res.status(404).send("Route not found");
});

// app.listen(3000, () => {
//   console.log("Listening on port 3000....");
// });

module.exports = app;
