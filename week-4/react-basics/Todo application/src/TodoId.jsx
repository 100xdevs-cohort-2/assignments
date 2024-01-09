import React, { useEffect, useState } from "react";
import axios from "axios";
const TodoId = ({ todoId }) => {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
      .then((res) => {
        console.log(res);
        setTodo(res.data.todo);
      });
  }, [todoId]);
  return (
    <div>
      <h1>{todo.title}</h1>
      <h1>{todo.description}</h1>
    </div>
  );
};

export default TodoId;
