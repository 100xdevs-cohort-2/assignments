const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


const folder = './files';

app.get('/files', (req, res) => {
  fs.readdir(`${folder}`, (err, files) => {
    if(err){
      res.status(500).send('internal server error');
    }
    else{
      res.status(200).json(files);
    }
  })
})

app.get('/file/:filename', (req, res) => {
  const name = req.params.filename;
  fs.readFile(`${folder}/${name}`, 'utf-8', (err, data) => {
    if(err){
      res.status(404).send('File not found');
    }else{
      res.status(200).json(data);
    }
    })
  })



app.listen(3000);