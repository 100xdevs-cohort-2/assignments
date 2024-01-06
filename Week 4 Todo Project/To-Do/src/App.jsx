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
  const editToDo = (index, newName) => {
    console.log("Editing todo at index:", index);
    console.log("New name:", newName);
    
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, name: newName } : todo)));
    console.log("Updated todos:", todos);
  };

  const preEditToDo = (index) => {  
    const newName = prompt("Enter new name");
    editToDo (index, newName);
  }
  

  // Function to delete a todo
  const deleteToDo = (index) => {
    removeToDo(index); // For now, just use the removeToDo function
  };

  return (
    <><Heading /><Test
      todos={todos}
      addToDo={addToDo}
      removeToDo={removeToDo}
      editToDo={editToDo}
      deleteToDo={deleteToDo}
      preEditToDo={preEditToDo} /></>
  );
}

function Heading(){

  return (<>
  <div className="heading">
    <span>Improvise your Productivity</span>
  
  </div>
  
  </>)
}

function Test({ todos, addToDo, removeToDo, editToDo, deleteToDo,preEditToDo }) {
  const [task, setTask] = useState('');

  return (
    <>
      <div className="task-list">
        {todos.map((todo, index) => (
          <div key={index} className="task">
            <div>
            <input type="checkbox" checked={todo.done} />
            </div>
            <div className="task-name">{todo.name}
            <div className="task-actions">
              <button onClick={() => preEditToDo(index)}>Edit</button>
              <button onClick={() => deleteToDo(index)}>Delete</button>
            </div>
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
