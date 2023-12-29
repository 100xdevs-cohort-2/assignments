import { useState,useRef } from "react";
import './App.css'
let id=1;
export default function App(){

  console.log('app')
  const titleRef=useRef(null);
  const descRef=useRef(null);

  const [todos,setTodos]=useState([]);

  function addTodo(){
    const title=titleRef.current.value;
    const desc=descRef.current.value;

    todos.push({id,title,desc})
    id++;
    setTodos([...todos])
  }
  return(
    <div>
      <div className="add">
        Title : <input type="text" ref={titleRef}></input>
        Description : <input type='text' ref={descRef}></input>
        <button onClick={addTodo} >ADD TODO</button>
      </div>
      <Cards todos={todos} />
    </div>
  )
}

function Cards({todos}){

  return (
    <div className="todos-container">
    {
      todos.map((todo)=><Card todo={todo} id={todo.id} />)
    }
    </div>
    
  )
}

function Card({todo}){
  return (
    <div id={todo.id} className="todo-container">
      <div>{todo.title}</div>
      <div>{todo.desc}</div>
    </div>
  )
}