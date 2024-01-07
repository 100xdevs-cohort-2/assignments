//--IMPORTS--
const { Todo } = require("../db/db");

//--FUNCTIONS--
const express = require("express");
const { Router } = require("express");
const tokenVerification = require("../middlewares/tokenVerification");
const router = Router();

//--MIDDLEWARES--
const app = express();
router.use(express.json());
router.use(tokenVerification);

//--VARIABLES--
let todoId = 0;

router.post("/create-todo", async (req, res) => {
  const todo = req.body;
  if (!todo.title || !todo.description) {
    return res.status(401).json({ error: "Missing required field!" });
  }

  todoId = todoId + 1;

  try {
    const createdItem = await Todo.create({
      id: todoId,
      title: todo.title,
      description: todo.description,
      completed: false,
    });

    if (createdItem) {
      res.status(201).send(createdItem);
    }
  } catch (error) {
    return res.status(404).json({ error: "Internal Server error!" });
  }
});

router.get("/get-all-todo", async (req, res) => {
  try {
    let todos = await Todo.find({});
    if (todos) {
      res.status(200).json({ todos });
    }
  } catch (error) {
    res.status(404).json({ error: "Error fetching from DB" });
  }
});

router.put("/completed/:todoId", async (req, res) => {
  const id = Number(req.params.todoId);

  try {
    const completed = await Todo.findOneAndUpdate(
      { id: id },
      { completed: true }
    );

    if (completed) {
      return res.status(200).json({ message: "Todo marked completed" });
    } else {
      return res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error completing todo in DB" });
  }
});

module.exports = router;
