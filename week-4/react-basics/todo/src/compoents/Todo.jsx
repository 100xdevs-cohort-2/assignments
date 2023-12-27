import React, { useState } from "react";
import './todo.css'
function Todo() {
    const [task, setTask] = useState('');
    const [taskArray, setTaskArray] = useState([])
    
    function onRemove(e) {
       setTaskArray (taskArray.filter((task) => (
        task.id !=e
       )));

    }
    return (
        <>
            <div className="input-box">
                <h1>List Your Todo's</h1>
                <input type="text" placeholder="Enter Task" name="" id="" onChange={(e) => {
                    // console.log(e.target.value)
                    setTask(e.target.value)
                }
                } />
                <button onClick={() => {
                    task.length !=0 &&
                    setTaskArray([...taskArray, {
                        taskName: task,
                        id: taskArray.length,
                        isEditing : false
                    }])
                    setTask('')
                }}>Add</button>
            </div>

            <div className="pannel" >
                {taskArray.map((task, index) => (<h1 key={index}>
                    {index + 1}  :   {task.taskName} <button onClick={() => {
                        onRemove(index)
                    }}> Remove </button> 
                </h1>))}

            </div>
        </>
    )
}
export default Todo