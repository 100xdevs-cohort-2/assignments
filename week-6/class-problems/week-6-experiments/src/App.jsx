import { Header } from "./components/Header";
import { HeaderWithButton } from "./components/HeaderWithButton";
import { useState, useEffect } from "react";
import { Todo } from "./components/Todo";
import { CardWrapper } from "./components/CardWrapper";
import { TextComponent } from "./components/TextComponent";

function App() {
  // Class Example
  // const [title, setTitle] = useState("My name is Shiv");
  // const clickHandler = () => {
  //   const value = Math.random();
  //   setTitle("My name is " + value);
  // };

  //TODO Example
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "Go to gym",
  //     description: "go to gym today",
  //   },
  //   {
  //     id: 2,
  //     title: "Go to market",
  //     description: "go to market today",
  //   },
  //   {
  //     id: 3,
  //     title: "Go to mall",
  //     description: "go to mall today",
  //   },
  // ]);

  // function addTodo() {

  //   setTodos([
  //     ...todos,
  //     {
  //       id: Math.random(),
  //       title: Math.random(),
  //       description: Math.random(),
  //     },
  //   ]);
  // }

  // Class Assignment
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // setInterval is used to run the fetch cal every 4 seconds
    // setInterval(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
    // }, 4000);
  }, []);

  return (
    <div>
      {/* React Memo */}
      {/* <button onClick={clickHandler}>MEMO CLICK</button> */}

      {/* <HeaderWithButton />
      <Header title={title} />
      <Header title={"Header 2"} />
      <Header title={"Header 3"} />
      <Header title={"Header 4"} />
      <Header title={"Header 5"} /> */}

      {/* <button onClick={addTodo}>ADD TODO</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
      })} */}
      {/* <Todo title="Hi" description="from todo" /> */}

      {/* <CardWrapper InnerComponent={<TextComponent />} /> */}
      {/* recommend way to write a wrapper component is below */}
      {/* <CardWrapper>asdasd</CardWrapper> */}

      {/* Class Assignment */}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </div>
  );
}

export default App;
