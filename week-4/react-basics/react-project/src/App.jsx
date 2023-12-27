import { useState } from 'react'

function AddTodo({handleAddition}) {
    function handleClick() {
        const title = document.querySelector('.title').value
        const description = document.querySelector('.description').value
        if(title !== '' || description !== '')
            handleAddition(title, description)
    }
    return (
        <div>
            <input className='title' type="text" placeholder='Title...' />
            <br />
            <input className='description' type="text" placeholder='decription' />
            <br />
            <button onClick={handleClick}>Add Todo</button>
        </div>
    )        
}

function ShowTodos({todos, handleClick}) {
    const list = todos.map((todo) => 
        <div key={todo.id}>
        <p><b>{todo.title}</b></p>
        <p>{todo.description}</p>
        <button key={todo.id} onClick={() => handleClick(todo.id)} >{todo.completed?'Done':'Mark as done!'}</button>
        </div>
    );
    return (
        <div>
            <h2>Todos: </h2>
            <div>{list}</div>
        </div>
    )
}

let dummyTodos = [
    { title: "Cohort", description: "Complete the assignments", id: 1, completed: false},
    { title: "Gym", description: "Go to Gym", id: 2, completed: false},
    { title: "Drink", description: "Dring Water", id: 3, completed: false},
    { title: "Eat", description: "Eat 3 meals a day", id: 4, completed: false},
]

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

