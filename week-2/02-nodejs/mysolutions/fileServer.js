const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;




app.get("/files", (req, res) => {
    fs.readdir(path.join(__dirname, "./files/"),   //  make it ../files/ for the current directory structure
   
    (err,files) => {
        if(err){
            return res.status(500).json({error: "Invalid Directory"});
        }

        return res.status(200).json(files);


    });
});


app.get("/file/:fileName", (req, res) => {
    fs.readFile(
        path.join(__dirname, "./files/") + req.params.fileName , "utf-8" ,
         
        (err, data) => {
            if(err){
                return res.status(404).send("File not found");
            }

            return res.status(200).send(data);
        }

    );
});


app.all('*' , (req,res) => {
    res.status(404).send('Route not found');
});

module.exports = app;