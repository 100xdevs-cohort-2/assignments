const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.json());

app
  .route("/todos")
  .get((req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
      if (err) throw err;
      res.status(200).json(JSON.parse(data));
    });
  })
  .post((req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
      if (err) throw err;
      let toDos = JSON.parse(data);
      const newToDo = { id: Math.floor(Math.random() * 10000), ...req.body };
      toDos.push(newToDo);

      fs.writeFile("todos.json", JSON.stringify(toDos), (err) => {
        if (err) throw err;
        res.status(201).json(newToDo);
      });
    });
  });

app
  .route("/todos/:id")
  .get((req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
      const toDos = JSON.parse(data);
      const toDo = toDos.find((todo) => todo.id === Number(req.params.id));
      !toDo
        ? res.status(404).send(`404 Not Found`)
        : res.status(200).send(toDo);
    });
  })
  .put((req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
      const toDos = JSON.parse(data);
      const searchIndex = toDos.findIndex(
        ({ id }) => id === Number(req.params.id)
      );
      if (searchIndex === -1) {
        res.status(404).send(`404 Not Found`);
      } else {
        toDos[searchIndex] = { id: Number(req.params.id), ...req.body };
        fs.writeFile("todos.json", JSON.stringify(toDos), (err) => {
          if (err) throw err;
          res.status(200).json(toDos[searchIndex]);
        });
      }
    });
  })
  .delete((req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
      let toDos = JSON.parse(data);
      const searchIndex = toDos.find(({ id }) => id === Number(req.params.id));
      if (!searchIndex) {
        res.status(404).send(`404 Not Found`);
      } else {
        let deletedToDo = toDos.splice(searchIndex, 1);
        fs.writeFile("todos.json", JSON.stringify(toDos), (err) => {
          if (err) throw err;
          res.status(200).json(deletedToDo);
        });
      }
    });
  });

// app.listen(port, () => console.log(`Server is running on PORT:${port}`));

module.exports = app;
