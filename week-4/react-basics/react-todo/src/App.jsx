import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([]); 
  let id = Math.random();

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    setTodos([...todos, {
      title: title,
      description: description,
      id: id
    }])
  }
  
  function removeTodo(id){
    const remove = todos.filter((todo) => todo.id != id);
    setTodos(remove);
  }

  return (
    <div>
      <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
      <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
      <button onClick={addTodo}>Add todo</button>
      {todos.map(function(todo) {
        return <Todo {...todo} key={todo.id} />
      })}

    </div>
  )
}

function Todo(props) {
  const {title, description, id} = props;
  console.log(props);
  
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <button onClick={()=> removeTodo(id)}>Remove</button>
  </div>
}

export default App