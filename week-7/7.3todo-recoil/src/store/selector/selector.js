import { selector } from "recoil";
import { todoListState, filterState } from "../atoms/atoms";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const todos = get(todoListState);
    const filter = get(filterState).toLowerCase();

    return todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(filter) ||
        todo.description.toLowerCase().includes(filter)
    );
  },
});
