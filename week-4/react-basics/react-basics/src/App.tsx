import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function addTodo() {
    console.log('add todo')
  }
  return (
    <>
       <div id="container">
        <h1 id="mainTitle"></h1>
        <div id="todos"></div>
        <div>
          <div>
            <input  id="title" placeholder="Todo title"></input>
            <input  id="description" placeholder="Todo description"></input>
            <button onClick={addTodo}>Add todo</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
