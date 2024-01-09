import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("https://");
  }, []);

  const handleAddTodo = () => {
    if (title !== "" && description !== "") {
      const todoToAdd = {
        title,
        description,
        id: uuid4(),
        color: null,
      };
      setTodo([...todo, todoToAdd]);
    }
    return;
  };

  const handleDeleteTodo = (id) => {
    const newArray = todo.filter(function (element) {
      return element.id !== id;
    });
    setTodo(newArray);
  };

  const handleDoneTodo = (id) => {
    const newArray = todo.map((element) => {
      if (id === element.id) {
        if (element.color === null) {
          element.color = "green-300";
        } else {
          element.color = null;
        }
      }
      return element;
    });
    setTodo(newArray);
  };
  return (
    <div
      className={
        "bg-gradient-to-r from-[#a3acfe] to-[#b7bfff] h-[100vh] flex flex-col justify-start items-center pt-20"
      }
    >
      <div className="p-10 bg-white rounded-[20px] flex flex-col justify-start items-center w-[30rem] min-h-[40rem]">
        <h2 className="font-bold text-[2rem]">
          <span className="text-[#6a51ff] ">my</span>
          <span className="text-[#0f0f0f] ">Todos</span>
        </h2>
        <div className=" pt-[3rem] w-[100%] flex flex-col justify-around">
          <label className="py-2 font-bold text-black text-[1.2rem]">
            Title
          </label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            className="border-2 border-[#a197e9] active:border-[#a197e9] w-[80%] rounded-lg h-[2.5rem]"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="pt-[1rem] w-[100%] flex flex-col justify-around">
          <label className="py-2 font-bold text-black text-[1.2rem]">
            Description
          </label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            className="border-2 border-[#a197e9] active:border-[#a197e9] w-[80%] rounded-lg h-[2.5rem]"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="pt-4 w-[100%]">
          <button
            className="bg-[#7b65ff] text-white p-[10px] rounded-lg"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
        <div className=" w-[100%] pt-[1rem] p-2">
          {todo?.map((todo) => {
            return (
              <div
                className={`border-2  ${
                  todo.color ? "border-green-400" : ""
                } flex justify-between rounded-lg`}
                key={todo.id}
              >
                <div>
                  <h3 className="text-[2rem]">{todo.title}</h3>
                  <p>{todo.description}</p>
                </div>
                <div className="flex gap-[2px] p-2">
                  <button
                    className={"bg-green-600 text-white rounded-lg  px-4"}
                    onClick={() => handleDoneTodo(todo.id)}
                  >
                    Done
                  </button>
                  <button
                    className={"bg-red-600 text-white rounded-lg px-4"}
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
