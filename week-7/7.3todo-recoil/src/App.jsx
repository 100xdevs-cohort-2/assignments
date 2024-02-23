import { useRecoilState, useRecoilValue } from "recoil";
import {
  todoListState,
  todoInputState,
  filterState,
} from "./store/atoms/atoms";
import { filteredTodoListState } from "./store/selector/selector";

const App = () => {
  const todos = useRecoilValue(filteredTodoListState);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [todoInput, setTodoInput] = useRecoilState(todoInputState);
  const [filter, setFilter] = useRecoilState(filterState);

  const addTodo = () => {
    setTodoList([...todoList, { ...todoInput }]);
    setTodoInput({ title: "", description: "" });
  };

  return (
    <div>
      <h1>Todo App</h1>

      <div>
        <input
          type="text"
          placeholder="Title"
          value={todoInput.title}
          onChange={(e) =>
            setTodoInput({ ...todoInput, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={todoInput.description}
          onChange={(e) =>
            setTodoInput({ ...todoInput, description: e.target.value })
          }
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <br />
      <div>
        <label>Filter:</label>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}:</strong> {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
