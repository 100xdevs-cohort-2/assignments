import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [globalId, setGlobalId] = useState(0);
  const [todoState, setTodoState] = useState([]);

  const markAsDone = useCallback(
    (todoId) => {
      const parent = document.getElementById(todoId);
      parent.children[2].innerHTML = "Done!";
      const index = todoState.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        todoState[index].completed = true;
      }
    },
    [todoState]
  );
  const updateTodoInDom = useCallback((todo) => {
    const newTitle = prompt("Enter new title:");
    const newDescription = prompt("Enter new description:");
    const element = document.getElementById(`${todo.id}`);
    if (element) {
      element.children[0].innerHTML = newTitle;
      element.children[1].innerHTML = newDescription;
    }

    setTodoState((prevTodos) => {
      return prevTodos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, title: newTitle, description: newDescription };
        }
        return item;
      });
    });
  }, []);
  const addTodoToDom = useCallback(
    (todo) => {
      const parent = document.getElementById("todos");
      const parentdiv = document.createElement("div");
      parentdiv.setAttribute("id", `${todo.id}`);
      const firstchild = document.createElement("p");
      firstchild.innerHTML = todo.title;
      const secondChild = document.createElement("p");
      secondChild.innerHTML = todo.description;
      const thirdChild = document.createElement("button");
      thirdChild.innerHTML = todo.completed ? "Done!" : "Mark as Done";
      thirdChild.onclick = () => markAsDone(todo.id);
      const fourthChild = document.createElement("button");
      fourthChild.innerHTML = "Update";
      fourthChild.onclick = () => updateTodoInDom(todo);
      const fifthChild = document.createElement("button");
      fifthChild.innerHTML = "Delete";
      fifthChild.onclick = function () {
        const remainingTodos = todoState.filter((item) => item.id !== todo.id);
        removeTodoFromDom(todo.id);
        setTodoState(remainingTodos);
      };
      parentdiv.appendChild(firstchild);
      parentdiv.appendChild(secondChild);
      parentdiv.appendChild(thirdChild);
      parentdiv.appendChild(fourthChild);
      parentdiv.appendChild(fifthChild);
      parent.appendChild(parentdiv);
    },
    [markAsDone, todoState, updateTodoInDom]
  );

  const renderAllAddedTodos = useCallback(() => {
    console.log(todoState);
    document.getElementById("todos").innerHTML = "";
    for (const todo of todoState) {
      addTodoToDom(todo);
    }
  }, [addTodoToDom, todoState]);

  function removeTodoFromDom(todo) {
    const element = document.getElementById(todo);
    element.parentNode.removeChild(element);
  }

  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const newTodo = {
      title: title,
      description: description,
      id: globalId + 1,
      completed: false,
    };
    setGlobalId((globalId) => globalId + 1);
    addTodoToDom(newTodo);
    setTodoState((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <>
      <div>
        <input type="text" id="title" placeholder="Todo title"></input> <br />
        <br />
        <input
          type="text"
          id="description"
          placeholder="Todo description"
        ></input>{" "}
        <br />
        <br />
        <button onClick={() => addTodo()}>Add todo</button>
        <button onClick={() => renderAllAddedTodos()}>
          Render All Added Todos
        </button>
        <br /> <br />
        <div id="todos"></div>
      </div>
    </>
  );
}

export default App;
