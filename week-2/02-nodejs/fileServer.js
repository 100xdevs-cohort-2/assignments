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


// *************************************************** solution 1    

// const express = require("express")
// const app = express()
// const fs = require("fs")
// const path = require("path")
// module.exports = app;

// let filename = [{
//   file: "a.txt"
// }, {
//   file: "b.txt"
// }]

// app.get('/', (req, res) => {
//   let arr = []
//   filename.map((element) => { arr.push(element.file) }
//   )
//   if (arr.length==0){
//     return res.status(404).send("No files found")
//   }
//   res.status(200).json(arr)
// })

// app.get("/file/:name", function (req, res) {
//   fs.readFile(`./files/${req.params.name}`, 'utf-8', function (err, data) {
//     if (err) {
//       return res.status(404).send('File not found');
//     }
//     res.status(200).send(data);
//   });
// })

// app.listen(3000)

// *************************************************** solution 2   

const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send("<b>Home Page : </b>localhost:3000/ <br><br><b>To view all files : </b>localhost:3000/files <br><br><b>To open the file :</b> localhost:3000/files/filename")
})

app.get('/files', function (req, res) {
  fs.readdir(path.join(__dirname, './files/'), 'utf-8', function (err, files) {
    if (err) {
      return res.status(500).json({
        msg : "Cannot fetch files"
      })
    }
    res.json(files)
  })
})

app.get('/file/:filename', (req, res) => {
  const check = req.params.filename;
  fs.readFile(path.join(__dirname, './files/', check), 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).send("File not found")
    }
    res.status(200).send(data)
  })
})

app.all('*', (req, res) => {
  res.status(404).send("Route not found")
})

module.exports=app
