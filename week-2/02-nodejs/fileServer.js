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
    
    /*
    the readdir function is used to asynchronously read the contents of a directory. It is part of the fs (file system) module.
    The readdir function reads the names of files and directories in the specified directory but does not provide additional information about them (such as whether they are files or directories). If you need more detailed information about each item in the directory, you may want to use the fs.stat function in combination with readdir.
    */
    
    app.get('/files', function (req, res) {
    
      fs.readdir(path.join(__dirname, './files/'), (err, files) => {
    
        if (err) {
          return res.status(500).json({ error: 'Failed to retrieve files' });
        }
    
        res.json(files);
      });
    
    });
    
    
    app.get('/file/:filename', function (req, res) {
    
      const filepath = path.join(__dirname, './files/', req.params.filename);
    
      fs.readFile(filepath, 'utf8', (err, data) => {
      
        if (err) {
          return res.status(404).send('File not found');
        }
        res.send(data);
    
      });
    });
    
    /*
    This code is defining a route handler using the app.all method in a Node.js application. This handler is intended to handle all HTTP methods (GET, POST, PUT, etc.) for any path ('*' is a wildcard that matches any path). The purpose of this particular handler is to respond with a 404 status code and the message 'Route not found' for any request that reaches this point.
    */
    
    app.all('*', (req, res) => {
    
      res.status(404).send('Route not found');
    
    });
    
    module.exports = app;