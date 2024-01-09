import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoId from "./TodoId.jsx";
import MainTodo from "./MainTodo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainTodo />
  </React.StrictMode>
);
