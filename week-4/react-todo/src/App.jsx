import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (title && description) {
      const newTodo = { title, description };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
    } else {
      alert('Please enter both title and description.');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={addTodo}>Add TODO</button>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <strong>{todo.title}</strong>: {todo.description} <button onClick={() => removeTodo(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
