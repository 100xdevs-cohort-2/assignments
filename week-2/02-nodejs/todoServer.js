const express = require('express');
const fs = require('fs').promises;
const app = express();
const path = require('path');
app.use(express.json());

const TODOS_FILE_PATH = path.join(__dirname, 'todos.json');

async function readTodos() {
  try {
    const data = await fs.readFile(TODOS_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}


async function writeTodos(todos) {
  try {
    await fs.writeFile(TODOS_FILE_PATH, JSON.stringify(todos, null, 2));
  } catch (err) {
    console.error('Error writing todos:', err);
    throw err;
  }
}

app.get("/todos", async function (req, res) {

  todos = await readTodos();
  res.status(200).json(todos)
});

app.get("/todos/:id", async function (req, res) {
  try {
    const todoID = parseInt(req.params.id);
    const todos = await readTodos();
    const todo = todos.find(t => t.id === todoID);

    if (!todo) {
      return res.status(404).json({ message: `Todo not found for id ${todoID}` });
    }

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/todos', async function (req, res) {
  const todo = req.body;

  if (!todo['title'] || !todo['description']) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const todos = await readTodos();

  let maxID = todos.length > 0 ? Math.max(...todos.map(t => t.id)) : 0;
  const newTodo = {
    id: maxID + 1,
    title: todo['title'],
    description: todo['description'],
    completed: todo['completed']
  };
  todos.push(newTodo);
  await writeTodos(todos);

  res.status(201).json({ id: newTodo.id });

});

app.delete('/todos/:id', async function (req, res) {
  const todos = await readTodos();
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: 'requested id not found' });
  }

  todos.splice(todoIndex, 1);
  await writeTodos(todos);
  res.status(200).json({ message: 'Todo deleted successfully' });
});

app.put('/todos/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  const { title, description, completed } = req.body;
  const todos = await readTodos();
  const todoIndex = todos.findIndex(t => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: 'requested id not found' });
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    title: title || todos[todoIndex].title,
    description: description || todos[todoIndex].description,
    completed: completed !== undefined ? completed : todos[todoIndex].completed
  };

  await writeTodos(todos);
  res.status(200).json(todos[todoIndex]);
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
function startServer(port) {
  return app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
}

module.exports = { app, startServer };
