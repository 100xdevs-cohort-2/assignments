import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import '@radix-ui/themes/styles.css';
import {Theme, Button} from '@radix-ui/themes'

export function Form(){
    const [state, setState] = useState({
        name: "",
        group: "",
        interest: "",
    })

    function handleInputChange(e){
        setState({...state, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault() 
        axios.post("http://localhost:3001/card", {
            name: state.name,
            group: state.group,
            interest: state.interest
        })
    }

    console.log(state)
    return(
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="text" name="name" value = {state.name} onChange={(e) =>{handleInputChange(e)}}></input>
        </div>
        <div>
            <label>Group</label>
            <input type="text" name = "group" value = {state.group} onChange={(e)=>{handleInputChange(e)}}></input>
        </div>
        <div>
            <label>Interest</label>
            <input type="text" name="interest" value = {state.interest} onChange={(e)=>{handleInputChange(e)}}></input>
        </div>
        <div>
            <Button type="submit">submit</Button>
        </div>
    </form>
    )
}