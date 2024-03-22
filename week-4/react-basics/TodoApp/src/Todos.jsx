import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import axios from 'axios';

export const Todos = ({todos}) => {

  function Delete(id){
     console.log("yes")
    axios.delete(`http://localhost:3000/todos/${id}`)
  }
  return (
    <div>
        {todos.map(function(todo){return <div key = {todo.todoId}>
            <p>{todo.todoId}</p>
            <h2>{todo.todo}</h2>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick= {()=>Delete(todo.todoId)}></Button>
            </div>})} 
    </div>
  )
}
