import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
function App() {
  function buttonClicked() {
    // console.log(title.value);
    // console.log(description.value);
    const todo = document.createElement("div");
    todo.innerHTML = `<h3>${title.value}</h3><p>${description.value}</p>`;
    document.getElementById("todoshere").appendChild(todo);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }
  return (
    <>
      <TextField id="title" label="title" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="description" label="description" variant="outlined" />
      <br></br>
      <br></br>
      <Button variant="contained" onClick={buttonClicked}>
        ADD Todo
      </Button>
      <div id="todoshere"></div>
    </>
  );
}

export default App;
