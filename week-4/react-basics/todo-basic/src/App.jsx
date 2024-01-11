import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    title: "",
    desc: "",
  });

  const onInputChange = (e) => {
    setCurrentTodo({
      ...currentTodo,
      [e.target.name]: e.target.value,
    });
  };

  const addTodo = () => {
    setCurrentTodo({
      ...currentTodo,
    });
    setTodos([...todos, currentTodo]);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Todo Title"
          onChange={onInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Todo Description"
          onChange={onInputChange}
        />
        <br />
        <br />
        <button onClick={(e) => addTodo()}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <div>
              <h1>{todo.title}</h1>
              <h3>{todo.description}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
