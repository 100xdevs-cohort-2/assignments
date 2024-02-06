import React, { useState } from "react";

const Todos = ({ todos, onUpdate, onDelete }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  // handleSaveClick, update the todo with new values
  const handleSaveClick = () => {
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

  // handleUpdateClick, set editing index and pre-fill input fields with todo values
  const handleUpdateClick = (index) => {
    setEditingIndex(index);
    setUpdatedTitle(todos[index].title);
    setUpdatedDescription(todos[index].description);
  };

  // handleDeleteClick, delete the todo at the given index
  const handleDeleteClick = (index) => {
    onDelete(index);
  };

  if (!Array.isArray(todos)) {
    return <div>No todos to display</div>;
  }

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
};

export default Todos;
