import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "test-todo",
      description: "test-desciption",
    },
  ]);

  return (
    <>
      <h1>Todos App</h1>
      <div id="add-todo">
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <input
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
        <button
          onClick={() => {
            if (title.length !== 0 && description.length !== 0)
              setTodos([...todos, { title, description }]);
          }}
          className="button"
        >
          Add Todo
        </button>
      </div>

      {todos.length === 0
        ? "Add Todos to display"
        : todos.map((todo) => {
            return (
              <div id="todo-container" key={todo.id}>
                <div className="title">{todo.title}</div>
                <div className="description">{todo.description}</div>
              </div>
            );
          })}
    </>
  );
}

export default App;
