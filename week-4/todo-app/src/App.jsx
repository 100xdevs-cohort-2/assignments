// src/App.jsx

let globalId = 1;
let todos = [];
let oldTodos = [];

function addTodoToDom(todo) {
  const parent = document.getElementById("todos");

  const div = document.createElement("div");
  div.setAttribute("id", `todo-${todo.id}`);
  div.style.border = "1px solid #ccc";
  div.style.margin = "8px";
  div.style.padding = "8px";

  const title = document.createElement("h3");
  title.innerText = todo.title;

  const desc = document.createElement("p");
  desc.innerText = todo.description;

  const delBtn = document.createElement("button");
  delBtn.innerText = "Mark as Done";
  delBtn.onclick = () => {
    todos = todos.filter((t) => t.id !== todo.id);
    updateState(todos);
  };

  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(delBtn);
  parent.appendChild(div);
}

function removeTodoFromDom(todo) {
  const elem = document.getElementById(`todo-${todo.id}`);
  if (elem) {
    elem.remove();
  }
}

function updateTodoInDom(todo) {
  const elem = document.getElementById(`todo-${todo.id}`);
  if (elem) {
    elem.children[0].innerText = todo.title;
    elem.children[1].innerText = todo.description;
  }
}

function updateState(newTodos) {
  const toAdd = newTodos.filter((n) => !oldTodos.some((o) => o.id === n.id));
  const toDelete = oldTodos.filter((o) => !newTodos.some((n) => n.id === o.id));
  const toUpdate = newTodos.filter((n) =>
    oldTodos.some(
      (o) =>
        o.id === n.id &&
        (o.title !== n.title || o.description !== n.description)
    )
  );

  toAdd.forEach(addTodoToDom);
  toDelete.forEach(removeTodoFromDom);
  toUpdate.forEach(updateTodoInDom);

  oldTodos = [...newTodos];
}

function App() {
  setTimeout(() => {
    document.getElementById("add-btn").onclick = () => {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;

      if (!title.trim() || !description.trim()) return;

      const newTodo = {
        id: globalId++,
        title,
        description,
      };

      todos.push(newTodo);
      updateState(todos);

      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
    };
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Manual React-like Todo App</h2>
      <input id="title" placeholder="Enter Title" />
      <input id="description" placeholder="Enter Description" />
      <button id="add-btn">Add Todo</button>
      <div id="todos"></div>
    </div>
  );
}

export default App;
