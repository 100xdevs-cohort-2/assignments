import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // function to update a todo
  const updateTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };

  // function to delete a todo
  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <CreateTodo onAdd={addTodo} />
      <Todos todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
