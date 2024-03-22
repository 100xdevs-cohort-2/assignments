// Todos.jsx
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Todos({ todos, onUpdate, onDelete }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleUpdateClick = (index) => {
    // Set editing index and prefill input fields with todo values
    setEditingIndex(index);
    setUpdatedTitle(todos[index].title);
    setUpdatedDescription(todos[index].description);
  };

  const handleSaveClick = () => {
    // Update the todo with new values
    const updatedTodo = {
      title: updatedTitle,
      description: updatedDescription,
    };
    onUpdate(editingIndex, updatedTodo);

    // Reset editing state and input fields
    setEditingIndex(null);
    setUpdatedTitle("");
    setUpdatedDescription("");
  };

  const handleDeleteClick = (index) => {
    // Delete the todo at the given index
    onDelete(index);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {editingIndex === index ? (
            <div>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <input
                type="text"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div>
              <p>Title: {todo.title}</p>
              <p>Description: {todo.description}</p>
              <button onClick={() => handleUpdateClick(index)}>Update</button>
              <button onClick={() => handleDeleteClick(index)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
