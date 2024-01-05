import './App.css';
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState('');
  const [taskarray, setTaskArray] = useState([]);
  console.log(task);
  return (
    <>
      <div>
        <h1>List your Todo!</h1>
        <input type="text" placeholder="Enter Task" onChange={(e) => {
          //console.log(e.target.value)
          setTask(e.target.value)
        }} />

        <button onClick={() => {
          console.log(taskarray.length);
          console.log(task);
          setTaskArray([...taskarray, task]);
          setTask('');
        }}>
          Add
        </button>
      </div>

      <div>
        <ul>
          {taskarray.map((taskItem, index) => (
            <li key={index}>{taskItem} <button onClick={() => {
              const updatedarray = [...taskarray];
              updatedarray.splice(index, 1);
              setTaskArray(updatedarray);
            }}>
              Remove Task</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
