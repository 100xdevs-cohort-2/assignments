const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files',(req,res)=>{
  fs.readdir(path.join(__dirname,'/files'),(err,files)=>{
    if(err) return res.status(500).send({error: 'Failed to retrieve files'});
    res.send(files);
  });
});

app.get('/file/:filename',(req,res)=>{
  const filePath = path.join(__dirname,'/files/',req.params.filename);
  fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err) res.status(404).send('File not found');
    res.send(data);
  });
});

app.all('*',(req,res)=>{
  res.status(404).send('Route not found');
});

module.exports = app;