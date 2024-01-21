
import { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState([{
    title: '',
    description: ''
  }])

  return (
    <>
      <InputComponent todo={todo} setTodo={setTodo}></InputComponent>
      <DisplayComponent todo={todo}></DisplayComponent>
    </>
  )
}


function InputComponent({todo, setTodo}){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  function addTodo(){
    const newTodo = {
      title: title,
      description: description,
    };
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  }

  return (
    <>
      Todo: <input type="text" name="todo" onChange={(e) => {setTitle(e.target.value)}}/> <br />
      Description: <input type="text" name="description" onChange={(e) => {setDescription(e.target.value)}} /><br />
      <button type="button" onClick={addTodo} >Add Todo</button><br />
    </>
  )
}

function DisplayComponent(todo){
  let index = 1
  return(
    <>
    
    {todo.todo.map(function(element, index){
      return (
        <div>
        
        <h1>{element.title}</h1>
        <h2>{element.description}</h2>
      </div>
      )
      {index += 1}
    })}
    </>
  )
}


export default App
