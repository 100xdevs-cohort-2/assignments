import { useState } from "react"; //hook

function App() {
  const [count, setCount] = useState(0); // [state, setState]

  return (
    <div>
      <CoustomButton count={count} setCount={setCount}></CoustomButton>
      <CoustomButton count={count + 1} setCount={setCount}></CoustomButton>
      <CoustomButton count={count - 1} setCount={setCount}></CoustomButton>
      <CoustomButton count={count * 100} setCount={setCount}></CoustomButton>
    </div>
  )
}


// Component
function CoustomButton(props){

  function onClickHandler() {
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
