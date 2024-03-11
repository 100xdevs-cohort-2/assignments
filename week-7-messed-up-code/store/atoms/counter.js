import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: [],
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "all", 
});

export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const filter = get(filterAtom);

    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  },
});

const TodoList = () => {
  const filteredTodos = useRecoilValue(filteredTodosSelector);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
