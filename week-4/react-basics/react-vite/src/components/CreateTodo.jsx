import React, { useState } from "react";

const CreateTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddClick = () => {
    // Prevent editing empty todos
    if (!title.trim() || !description.trim()) return;

    // call the onAdd function from props to add the new todo
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
      />
      <br />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default CreateTodo;
