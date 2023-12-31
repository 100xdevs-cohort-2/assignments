import { ChangeEvent, FormEvent, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [todoItem, setTodoItem] = useState<TodoItemType>({
    id: nanoid(),
    title: "",
    description: "",
  });

  const handleDelete = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todoItem]);
    setTodoItem({
      id: nanoid(),
      title: "",
      description: "",
    });
    console.log(todos);
  };

  return (
    <div>
      <header className="h-[60px] text-xl shadow-lg bg-slate-950 text-white flex justify-center items-center">
        Todo app
      </header>
      <div className="__add_todo flex justify-center items-center">
        <form
          onSubmit={handleAddTodo}
          className="m-3 flex flex-col gap-2 w-full max-w-[300px] py-4 px-6 rounded shadow-xl"
        >
          <input
            className="p-2 border-2 border-gray-100 outline-none transition rounded"
            type="text"
            placeholder="title"
            required
            name="title"
            value={todoItem.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTodoItem((prevTitle) => ({
                ...prevTitle,
                title: e.target.value,
              }))
            }
          />
          <input
            className="p-2 border-2 border-gray-100 outline-none transition rounded"
            type="text"
            placeholder="description"
            required
            name="description"
            value={todoItem.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTodoItem((prevDescription) => ({
                ...prevDescription,
                description: e.target.value,
              }))
            }
          />
          <button
            className=" bg-blue-500 py-2 text-white rounded transition"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      {todos.length === 0 ? (
        <>
          <div className="text-gray-300 p-3 text-center">No Todos Found!</div>
        </>
      ) : (
        <div className="__todo_preview grid gap-2 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] p-3">
          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="__todo_item p-3 shadow-xl border-[1px] border-gray-100 rounded"
              >
                <div className="__preview">
                  <h3 className="text-2xl font-bold mb-2">{todo.title}</h3>
                  <p>{todo.description}</p>
                </div>
                <div className="__btn_container flex gap-2 mt-2">
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-500 px-3 py-1 rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
