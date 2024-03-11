/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [globalId, setGlobalId] = useState(1);
  const [todoState, setTodoState] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodoToDom = (todo) => {
    const todosDiv = document.getElementById("todos");
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = `<strong>${todo.title}</strong>: ${todo.description} <button onclick="removeTodoFromDom(${todo.id})">Remove</button>`;
    todoDiv.id = `todo-${todo.id}`;
    todosDiv.appendChild(todoDiv);
  };

  const removeTodoFromDom = (todoId) => {
    const todosDiv = document.getElementById("todos");
    const todoToRemove = document.getElementById(`todo-${todoId}`);
    todosDiv.removeChild(todoToRemove);
  };

  const updateTodoInDom = (oldTodo, newTodo) => {
    const todosDiv = document.getElementById("todos");
    const todoToUpdate = document.getElementById(`todo-${oldTodo.id}`);
    todoToUpdate.innerHTML = `<strong>${newTodo.title}</strong>: ${newTodo.description} <button onclick="removeTodoFromDom(${newTodo.id})">Remove</button>`;
  };

  const updateState = (newTodos) => {
    const added = [];
    const deleted = [];
    const updated = [];

    for (const newTodo of newTodos) {
      const oldTodo = todoState.find((todo) => todo.id === newTodo.id);

      if (!oldTodo) {
        added.push(newTodo);
      } else {
        if (
          oldTodo.title !== newTodo.title ||
          oldTodo.description !== newTodo.description
        ) {
          updated.push({ oldTodo, newTodo });
        }
      }
    }

    for (const oldTodo of todoState) {
      const stillExists = newTodos.find((todo) => todo.id === oldTodo.id);
      if (!stillExists) {
        deleted.push(oldTodo);
      }
    }

    added.forEach(addTodoToDom);
    deleted.forEach((todo) => removeTodoFromDom(todo.id));
    updated.forEach(({ oldTodo, newTodo }) =>
      updateTodoInDom(oldTodo, newTodo)
    );

    setTodoState(newTodos);
  };

  const addTodo = () => {
    const newTodo = {
      title: title,
      description: description,
      id: setGlobalId(globalId + 1),
    };
    setTodoState([...todoState, newTodo]);
    addTodoToDom(newTodo);
    setTitle("");
    setDescription("");
    updateState([...todoState, newTodo]);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
      />
      <br />
      <br />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Todo description"
      />
      <br />
      <br />
      <button onClick={addTodo}>Add todo</button>
      <br />
      <br />
      <div id="todos"></div>
    </div>
  );
}

export default App;
