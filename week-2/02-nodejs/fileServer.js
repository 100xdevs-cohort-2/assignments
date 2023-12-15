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
app.get("/files",(req,res)=>{
  const folderPath = './files';
  fs.readdir(folderPath,(err,files)=>{
    if (err){
        res.send(err)
    }
    else{
      const filesArray=files.filter((file)=>fs.statSync(path.join(folderPath,file)).isFile());
      res.json({files:filesArray});
    }
  })
 
})
app.get("/file/:fileName",(req,res)=>{
  const fileName=req.params.fileName;
  const folderPath="./files";
  const filePath=path.join(folderPath,fileName.slice(1,fileName.length));
  fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err){
      console.log(err);
      res.status(404).send("File not found");
    }
    else{
      res.send(data);
    }
  })
})

//for routes that are not defined
app.get("*",(req,res)=>{
  res.status(404).send("Route not found");
})
app.listen(3000,()=>{
  console.log("server is listening at 3000 port");
})

module.exports = app;