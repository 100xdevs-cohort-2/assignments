import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoObject = {
      title,description
    }
    setTodo([...todo, todoObject]);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <div className="form">
        <input type="text" placeholder="Enter your title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Enter your description" onChange={(e) => setDescription(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>
          Add Todo
        </button>
      </div>
      {todo.map((todo,index) =>
        <div key={index}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      )}
    </>
  );
}

export default App;
