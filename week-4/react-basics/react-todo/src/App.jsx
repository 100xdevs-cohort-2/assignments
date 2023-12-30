import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([]); 

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    setTodos([...todos, {
      title: title,
      description: description
    }])
  }

  return (
    <div>
      <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
      <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
      <button onClick={addTodo}>Add todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App