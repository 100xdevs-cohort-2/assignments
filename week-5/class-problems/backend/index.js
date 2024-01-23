const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

app.post("/todos", (req, res) => {
  const { title, description } = req.body;
  const todo = createTodo.parse({ title, description });

  if (!todo.success) {
    res.status(411).json({
      message: "Wrong Inputs!",
    });
    return;
  }

  // mongoDB code here
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const { id } = req.body;
  const todo = updateTodo.safeParse({ id });

  if (!todo.success) {
    res.status(411).json({
      message: "Wrong Inputs!",
    });
    return;
  }

  // mongoDB code here
});

app.listen(() => {
  console.log("App Listening on port 3000");
});
