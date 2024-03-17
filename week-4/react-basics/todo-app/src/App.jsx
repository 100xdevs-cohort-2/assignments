import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title, description) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { title: title, description: description, completed: true }
    ]);
  };

  return (
    <div>
      <CreateTodo handleAddTodo={handleAddTodo} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}


function Todo({ todos, setTodos }) {
  const handleCompletion = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return updatedTodos;
    });
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={() => handleCompletion(index)}>
            {todo.completed === true? 'Mark as Complete' : 'Completed'}
          </button>
        </div>
      ))}
    </div>
  );
}




function CreateTodo({ handleAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <input
        style={{ padding: '10px', margin: '10px' }}
        type="text"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{ padding: '10px', margin: '10px' }}
        type="text"
        id="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={{ padding: '10px', margin: '10px' }}
        onClick={() => {
          handleAddTodo(title, description);
          setTitle('');
          setDescription('');
        }}
      >
        Add Todo
      </button>
      <br />
    </div>
  );
}

export default App;
