import React, { useState } from "react";
let id = 1;
const Todo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todo, setTodo] = useState([]);
  const handleonClick = () => {
    todo.push({ id, title, desc });
    id++;
    setTodo([...todo]);
    setTitle("");
    setDesc("");
  };
  const handledelete=()=>{
    
  }
  return (
    <div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" onChange={(e) => setDesc(e.target.value)} />
      <button onClick={() => handleonClick()}>Add</button>
      {todo.map((item) => {
        return (
          <div class="items">
            <h1>{item.title}</h1>
            <h3>{item.desc}</h3>
            <div>
              <button onClick={handledelete(item.id)}>delete</button>
              <button>update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
