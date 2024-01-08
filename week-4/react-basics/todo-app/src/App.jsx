// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  let globalId = 0;

  function getId() {
    return globalId++;
  }

  function markAsDone(id) {
    const parent = document.getElementById(id);
    parent.children[2].innerHTML = "Done";
  }

  function addTodoToDom(todo) {
    const parent = document.getElementById("todos");
    const child = document.createElement("div");
    child.setAttribute("id", todo.id);
    const firstGrandChild = document.createElement("div");
    firstGrandChild.innerHTML = todo.title;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = todo.description;
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.innerHTML = "Mark as done";
    thirdGrandChild.setAttribute("onclick", `markAsDone(${todo.id})`);
    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);
    parent.appendChild(child);
  }

  return (
    <>
      <div className="card">
        <input id="title" type="text" placeholder="title" required />
        <br />
        <input
          id="description"
          type="text"
          placeholder="description"
          required
        />
        <br />
        <button
          onClick={() => {
            console.log("inside onClick");
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            if (title === "" || description === "")
              window.alert("please enter both fields");
            else {
              const id = getId();
              console.log(title, description);
              addTodoToDom({
                title,
                description,
                id,
              });
            }
          }}
        >
          Submit
        </button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </>
  );
}

export default App;
