import { useState, useEffect } from 'react'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await fetch("http://localhost:3000/todos");
        const json = await res.json();
        console.log("response is",json);
        setTodos(json.todos);
      } 
      catch(err){
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  },[]);


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App
