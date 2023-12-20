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

const getFileNames = (path)=>{
  const p = new Promise((resolve,reject)=>{
    fs.readdir(path,(err,data)=>{
      if(err){
        console.error("Error :" + err);
        reject(err);
        return;
      }
      console.log(data);
      resolve(data);
    })
  })
  return p;
}

const returnData = (path)=>{
  const p = new Promise((resolve, reject)=>{
    fs.readFile(path, 'utf-8' , (err, data)=>{
      if (err){
        console.error("Error :"+ err);
        reject(err);
        return;
      }
      resolve(data);
    })
  })
  return p;
}


app.get('/files',async (req,res)=>{
  try{
  const filesArray = await getFileNames('files');
  console.log(filesArray);
  res.send(filesArray);
  }catch(err){
    res.status(500).send("No files found");
  }
});

app.get('/files/:filename', async (req,res)=>{
  try{
  const Data = await returnData('files/'+req.params.filename);
  console.log(Data);
  res.json(Data);
}catch (err){
  res.status(500).send("File doesn't exist");
}
});

app.get('/',(req,res)=>{
  res.senf(404).send("pagrenot found");
})

// module.exports = app;
app.listen(3000);