// createtodo.jsx
import { useState } from "react";

export function CreateTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddClick = () => {
    // Prevent adding empty todos
    if (!title.trim() || !description.trim()) return;

    // Call the onAdd function from props to add the new todo
    onAdd({ title, description });

    // Clear input fields after adding todo
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}
