import axios from "axios";
import { ChangeEvent, useState } from "react";

const CreateTodo = ({ onTodoCreated }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //dynamically updating the title and description fields
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  //POST request to create a todo
  const created = async () => {
    try {
      const postData = await axios.post(
        "http://localhost:3000/todos/create-todo",
        {
          title: title,
          description: description,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (postData) {
        onTodoCreated(); //To dynamically update the Todo list as soon as it is created
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center flex-col w-[40%] py-10">
      <h1 className="text-3xl font-bold text-center py-6">Create a Todo</h1>
      <div className="flex flex-col justify-between w-[50%]  h-40 ">
        <input
          type="text"
          placeholder="title"
          className="text-lg text-center"
          onChange={handleTitle}
        ></input>
        <input
          type="text"
          placeholder="description"
          className="text-lg text-center"
          onChange={handleDescription}
        ></input>
        <button onClick={created} className="bg-gray-600 rounded-md mx-12 py-1">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
