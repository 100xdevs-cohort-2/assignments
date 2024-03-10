const express = require('express');
const fs = require("fs");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.json());

/**
 * Reads the content of a file at the specified file path and returns it as a Promise.
 *
 * @param {string} filePath - The path of the file to be read.
 * @return {Promise<string>} A Promise that resolves with the content of the file as a string.
 */
const readFile = (fileName) => {
    const filePath = path.join(__dirname, fileName);
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

/**
 * Writes data to a file at the specified file path.
 *
 * @param {string} filePath - The path to the file.
 * @param {string} data - The data to be written to the file.
 * @return {Promise} A promise that resolves when the data has been written successfully, or rejects with an error if there was a problem.
 */
const writeFile = (fileName, data) => {
    const filePath = path.join(__dirname, fileName);
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        })
    })
}

// Get funtion which will real the todo.json file and return all the todos in json format
app.get('/todos', async (req, res) => {
    try {
        const data = await readFile("todos.json"); 
        res.json(JSON.parse(data));
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
})

// Get function which will return a specific todo in the todo.json file
app.get('/todos/:id', async (req, res) => {
    try {
        const todos = JSON.parse(await readFile("todos.json"));
        const todo = todos.find(todo => todo.id === parseInt(req.params.id));

        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ error: "Todo not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
})

// Post function which will create a new todo in the todo.json file
app.post("/todos", async (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description,
    };

    try {
        const todos = JSON.parse(await readFile("todos.json"));
        todos.push(newTodo);
        await writeFile("todos.json", JSON.stringify(todos));
        res.status(201).json(newTodo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});

// Put function which will update an existing todo in the todo.json file
app.put("/todos/:id", async (req, res) => {
    try {
        const todos = JSON.parse(await readFile("todos.json"));
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));

        if (todoIndex === -1) {
            res.status(404).json({ error: "Todo not found" });
        }

        const { title, completed, description } = req.body;
        todos[todoIndex] = { id : todos[todoIndex].id, title, completed, description };

        await writeFile("todos.json", JSON.stringify(todos));

        res.json(todos[todoIndex]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }   
});

// Delete function which will delete an existing todo in the todo.json file
app.delete("/todos/:id", async (req, res) => {
    try {
        const todos = JSON.parse(await readFile("todos.json"));
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));
        todos.splice(todoIndex, 1);

        await writeFile("todos.json", JSON.stringify(todos));

        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
})

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('This route does not exist');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})