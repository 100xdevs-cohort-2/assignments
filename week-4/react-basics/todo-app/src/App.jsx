import { useRef, useState } from "react";

function App(){
  
  let [todoList, setTodoList] = useState([{
    "title":"Go to gym",
    "description" : "Go to gym from 5 to 6pm"
  }]);
  
  let titleRef = useRef();
  let descRef = useRef();  

  const clickHandler = (e)=>{
      setTodoList([...todoList, {
        "title":titleRef.current.value,
        "description":descRef.current.value
      }]);
      //console.log(todoList);
  }

  const onRemove = (e)=>{
    setTodoList(todoList.filter((task, index) => e !== index)); //implicit return
  }

  return (
    <>
      <input type="text" placeholder="title" ref={titleRef}></input>
      <br></br> <br></br>
      <input type="text" placeholder="description" ref={descRef}></input>
      <br></br> <br></br>
      <button onClick={clickHandler}>Add todo item</button>

      <div>
        {todoList.map((ele, index) => (
          <div>
            <h4>Task {index + 1}</h4>
            <p>Title: {ele.title}</p>
            <p>Description: {ele.description}</p>
            <button onClick={()=>onRemove(index)}>Remove task</button>
          </div>
          )
          )
        }
      </div>
    </>

  );
}

export default App;