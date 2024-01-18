import {Todos} from './Todos';
import './App.css'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import Button from '@mui/material/Button'
import { useState } from 'react';

function App() {
  
  const [inputValue, setinputValue] = useState('')
  let [todos, setTodos] = useState([])
   function AddTodo(){
    axios.post('http://localhost:3000/todo', {
      todo: inputValue
    })
  }

 
  useEffect(()=>{
    axios.get('http://localhost:3000/todos').then(function(res){
      setTodos(res.data.processedTodos)
    })

  }, [todos])

  

  return (
    <div>
      <div>
        <TextField id="outlined-basic" label="todo" variant="outlined" className='textfield' onChange={(e)=> setinputValue(e.target.value)}/>
        <Button variant='contained' onClick={AddTodo}> + </Button>
      </div>
      <div>
        <Todos todos = {todos}/>
      </div>
    </div>
  )
}

export default App
