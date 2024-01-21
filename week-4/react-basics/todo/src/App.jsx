import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
let globalId = 1;
let oldTodoState = new Array;

  
function createTodoElement(todo){
      
  let id = todo.id;
  let title = document.createElement('p');
  title.innerHTML = todo.title;
  title.classList.add('title');
  title.style.margin = "2px";
  
  let description = document.createElement('p');
  description.innerHTML = todo.description;
  description.classList.add('descp');
  description.style.margin = '2px';

  let btn = document.createElement('button');
  btn.innerHTML = todo.isCompleted?'Done':'Mark As Done';
  btn.classList.add('todoBtn');

  let todoDiv = document.createElement('div');
  todoDiv.id = id;
  todoDiv.classList.add('todoDiv');
  todoDiv.style.margin= "10px";
  todoDiv.append(title,description,btn);
  return todoDiv;
}

function addTodoToDom(todo) {
  let todos = document.querySelector('#todos');

  todos.append(createTodoElement(todo));
}



function removeTodoFromDom(todo) {
  let id = todo.id;
  let todoDiv = document.querySelector('#'+id);
  todoDiv.remove();
}

function updateTodoInDom(todo) {
    let todoDiv = document.querySelector(todo.id);
    todoDiv.children[0].innerHTML = todo.title;
    todoDiv.children[1].innerHTML = todo.description;
    todoDiv.children[2].innerHTML = todo.isCompleted;
}


function updateState(newTodos) {

  const added = [];
  const deleted = [];
  const updated = [];

  let ids = new Map;
  oldTodoState.forEach(element => {
    ids.set(element.id, element);
  });

  
  newTodos.forEach(element => {
    if(ids.has(element.id)){
      let todo = ids.get(element.id);
      if(todo.title != element.title || todo.description != element.description || todo.isCompleted != element.isCompleted) updated.push(element);
      ids.delete(element.id);          
    }
    else added.push(element);
  });

  ids.forEach((value,key) => {
    deleted.add(value);
  });

  added.forEach(element => {
    addTodoToDom(element);
  });

  updated.forEach(todo=>{
    updateTodoInDom(todo);
  });

  deleted.forEach(todo=>{
    removeTodoFromDom(todo);
  });

  oldTodoState = newTodos;
}

  function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
 
  let todoState = [
    ...oldTodoState
  ];

  todoState.push({
    title: title,
    description: description,
    id: globalId++,
    isCompleted: false,
  });

  updateState(todoState);
  }


  return (
    <>
      <div>
        <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
        <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
        <button onClick={addTodo}>Add todo</button>
        <br /> <br />

        <div id="todos">

        </div>
      </div>
    </>
  )
}

export default App
