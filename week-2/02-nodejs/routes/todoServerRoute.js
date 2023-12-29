const express = require("express");
const todoRoutes = express.Router();

todoRoutes.get("/", (req, res) => {
  res.send("to do server");
});

/*
 1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
*/

todoRoutes.get('/todos',(req,res)=>{
    
})

module.exports = todoRoutes;
