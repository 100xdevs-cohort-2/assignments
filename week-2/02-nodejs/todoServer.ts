import express, { Request, Response } from "express";
import bodyparser from "body-parser";

const app = express();
const port: number = 3000;

interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

const todos: Todo[] = [
  {
    title: "Code",
    completed: false,
    description: "GoCode",
  },
  {
    title: "CodeAgain",
    completed: false,
    description: "GoCodeAgain",
  },
];

app.use(bodyparser.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(`Hi from port ${port};
  ID of every todo is it's index in array`);
});

app
  .route("/todos")
  .get((req: Request, res: Response) => {
    res.status(200).json(`Todos: ${JSON.stringify(todos)}`);
  })
  .post((req: Request, res: Response) => {
    const { todo } = req.body;
    todos.push(todo);
    res.status(201).json(`Todo created with id ${todos.length}`);
  });

app
  .route("/todos/:id")
  .get((req: Request, res: Response) => {
    const { id } = req.params;
    if (id > 0 && id <= todos.length) {
      res.status(200).json(todos[id - 1]);
    } else {
      res.status(404).json(`Todo not found`);
    }
  })
  .put((req: Request, res: Response) => {
    const { id } = req.params;
    const { newTodo } = req.body;
    if (id > 0 && id <= todos.length) {
      todos[id - 1] = newTodo;
      res.status(200).json(`Todo Updated`);
    } else {
      res.status(404).json(`Todo not found`);
    }
  })
  .delete((req: Request, res: Response) => {
    const { id } = req.params;
    if (id > 0 && id <= todos.length) {
      todos.splice(id - 1, 1);
      res.status(200).json(`Todo Deleted`);
    } else {
      res.status(404).json(`Todo not found`);
    }
  });

app.use((req, res, next) => {
  res.status(404).send(`Invalid Route`);
});

app.listen(port, () => {
  console.log(`App listning on ${port}`);
});
