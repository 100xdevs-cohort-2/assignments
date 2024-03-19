import React from "react";

function App() {
  const addTodo = () => {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const todoList = document.getElementById("todoList");

    const title = titleInput.value;
    const description = descriptionInput.value;

    if (title && description) {
      const todoItem = document.createElement("div");
      todoItem.innerHTML = `<strong>${title}</strong>: ${description}`;
      todoList.appendChild(todoItem);

      titleInput.value = "";
      descriptionInput.value = "";
    }
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <div>
        <input type="text" id="title" placeholder="Enter title" />
      </div>
      <div>
        <input type="text" id="description" placeholder="Enter description" />
      </div>
      <button onClick={addTodo}>Add ToDo</button>
      <div id="todoList"></div>
    </div>
  );
}

export default App;
