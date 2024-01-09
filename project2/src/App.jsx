import { useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';
import { Fragment } from 'react';

function App() {
  const [title, setTitle] = useState('Default Title');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function updateTitle() {
    setTitle('My name is ' + Math.random());
    alert('Updated');
  }

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  function removeTodo(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <Fragment>
      <Header title={title} updateTitle={updateTitle}></Header>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add TODO</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

function Header({ title, updateTitle }) {
  console.log('Rendered');

  return (
    <div>
      <div>{title}</div>
      <button onClick={updateTitle}>Update title</button>
    </div>
  );
}

export default App;
