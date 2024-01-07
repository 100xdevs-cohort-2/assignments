import { useState, useEffect } from "react";
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  //Runs once as the page mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "http://localhost:3000/todos/get-all-todo",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setTodos(response.data.todos);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleTodoCreated = () => {
    fetchData();
  };

  const handleCompleted = () => {
    fetchData();
  };
  return (
    <div>
      {/* "onTodoCreated" prop to fetch the todos from db as soon as created */}
      <CreateTodo onTodoCreated={handleTodoCreated}></CreateTodo>
      <TodoList todos={todos} onTodoCompleted={handleCompleted}></TodoList>
    </div>
  );
};

export default Todos;
