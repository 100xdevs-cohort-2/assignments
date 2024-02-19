import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function List() {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    axios
      .get("/api/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  
  

  return (
    <>
      {todos ? todos.map((val) => (
        <Link to={`/todo/${val.id}`}>
          <Card id={val.id} key={val.id} title={val.title} description={val.description}></Card>
        </Link>
  )) : "Is Loading"}
    </>
  );
}

export default List;
