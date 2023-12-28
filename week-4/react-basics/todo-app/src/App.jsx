import './App.css'

function App() {
  let globalId = 1;
  // function markAsDone(id) {
  //   const node = document.getElementById(id)
  //   node.remove();
  // }
  function createChild(title, description, id) {
    // Using the same function written during class
    // 2. document.createElement => foundation for react 
    const outerDiv = document.createElement("div")
    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = title;
    const descriptionDiv = document.createElement("div");
    descriptionDiv.innerHTML = description;
    // const doneButton = document.createElement("button");
    // doneButton.innerHTML = "Mark as Done";
    // doneButton.setAttribute("onClick",{markAsDone(id)});
    
    outerDiv.appendChild(titleDiv);
    outerDiv.appendChild(descriptionDiv);
    outerDiv.appendChild(document.createElement("br"));
    // outerDiv.appendChild(doneButton);
    outerDiv.setAttribute("id", id);
    
    return outerDiv;
  }
  function addTodo() {
    console.log("addTodo called")
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const id = globalId++;

    const parent = document.getElementById("todos")
    parent.appendChild(createChild(title, description, id))
  }
  return (
    <>
      <input id='title' type='text' placeholder='Todo title' /> <br /><br />
      <input id='description' type='text' placeholder='Todo description' /> <br /><br />
      <button onClick={addTodo}>Add todo</button>
      <div id="todos">

      </div>
    </>
  )
}

export default App
