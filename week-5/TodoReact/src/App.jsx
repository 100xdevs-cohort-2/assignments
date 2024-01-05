import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      tittle: 'Learn React',
      description: 'Learn React and its ecosystem',
      completed: true
    }, {
      tittle: 'Learn GraphQL',
      description: 'Learn GraphQL and its ecosystem',
      completed: false
    }, {
      tittle: 'Learn Relay',
      description: 'Learn Relay and its ecosystem',
      completed: false
    }
  ])
// React renders the compnent again only after stTodods function is called
  function addTodo(){
    // todos = [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      tittle: "new todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <h1>Todo Application</h1>
      <button onClick={addTodo}>Add a new todo</button>
      {/* <Todo tittle='todo title' description= 'todo description'></Todo> */}
      {todos.map(function(todo){
        return <Todo tittle = {todo.tittle} description = {todo.description} status = {todo.completed}></Todo>
      })}
    </div>
  )
}

function markAsDone(){

}

function Todo(props) {
  return <div>
    <hr />
    <h2>{props.tittle}</h2>
    <h3>{props.description}</h3>
    <button>{props.status? "completed"  : "Mark as done"}</button>
  </div>
}

export default App
