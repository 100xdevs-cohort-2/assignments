import { useState } from 'react'
import AddTodo from './components/AddTodo';
import ShowTodos from './components/ShowTodos';
import dummyTodos from './assets/dummyTodos.json'

export default function App() {
    const [todos, setTodos] = useState([...dummyTodos])

    function handleAddition(title, description){
        const newTodos = todos.slice();
        const newTodo = { title, description, id: todos.length+1, completed: false}
        newTodos.push(newTodo);
        setTodos(newTodos)
    }

    function handleUpdate(id) {
        const newTodos = todos.slice();
        newTodos.forEach((t) => {
            if(t.id === id){
                t.completed = true;
            }
        })
        setTodos(newTodos)
    }
  return (
    <>
      <AddTodo handleAddition={handleAddition} />
      <ShowTodos todos={todos} handleClick={handleUpdate}/>
    </>
  )
}
