const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());

const todo1 = [
  {
    title: "going to gym",
    description: "go gym in morning 5-7",
    id: 1,
  },
  {
    title: "going to school",
    description: "go school in morning 8-2",
    id: 2,
  },
  {
    title: "going to college",
    description: "go college in morning 8-2",
    id: 3,
  },
];
const todo2 = [
  {
    title: "going to cafe",
    description: "go cafe in afternoon 52 pm",
    id: 1,
  },
  {
    title: "going to park",
    description: "go park in afternoon 5-7 pm",
    id: 2,
  },
  {
    title: "going to market",
    description: "go market in afternoon 5-7 pm",
    id: 3,
  },
  {
    title: "going to home",
    description: "go home in afternoon 5-7 pm",
    id: 4,
  },
];
const todo3 = [
  {
    title: "going to gym",
    description: "go gym in evening 5-7",
    id: 1,
  },
  {
    title: "going to school",
    description: "go school in evening 8-2",
    id: 2,
  },
  {
    title: "going to college",
    description: "go college in evening 8-2",
    id: 3,
  },
  {
    title: "going to home",
    description: "go home in evening 8-2",
    id: 4,
  },
  {
    title: "going to park",
    description: "go park in evening 8-2",
    id: 5,
  },
  {
    title: "going to market",
    description: "go market in evening 8-2",
    id: 6,
  },
  {
    title: "going to cafe",
    description: "go cafe in evening 8-2",
    id: 7,
  },
];
const todos = [todo1, todo2, todo3];


// get random todos
app.get("/getTodos", (req, res) => {
    const randomTodos = todos[Math.floor(Math.random() * todos.length)];
    res.json({ todos: randomTodos });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
