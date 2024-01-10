import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: todos.length + 1, title, description },
    ]);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Add Todo</button>
      </form>
      <br />
      <br />
      <br />
      {todos.length > 0 &&
        todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
    </>
  );
}

export default App;
