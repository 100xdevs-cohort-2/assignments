import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addToDo = (newTask) => {
    setTodos([...todos, { name: newTask, done: false }]);
  };

  // Function to remove a todo
  const removeToDo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Function to edit a todo (not implemented in this example)
  const editToDo = (index,newName) => {
    // Implement edit functionality here
    setTodos(todos.map((todo,i) => i===index ? {...todo, name:newName} : {...todo}))
  };

  // Function to delete a todo
  const deleteToDo = (index) => {
    removeToDo(index); // For now, just use the removeToDo function
  };

  return (
    <Test
      todos={todos}
      addToDo={addToDo}
      removeToDo={removeToDo}
      editToDo={editToDo}
      deleteToDo={deleteToDo}
    />
  );
}

function Test({ todos, addToDo, removeToDo, editToDo, deleteToDo }) {
  const [task, setTask] = useState('');

  return (
    <>
      <div className="task-list">
        {todos.map((todo, index) => (
          <div key={index} className="task">
            <input type="checkbox" checked={todo.done} />
            <div className="task-name">{todo.name}</div>
            <div className="task-actions">
              <button onClick={() => editToDo(index)}>Edit</button>
              <button onClick={() => deleteToDo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="addTask">
        <input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => addToDo(task)}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
