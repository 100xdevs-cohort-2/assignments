import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoInputState = atom({
  key: "todoInputState",
  default: {
    title: "",
    description: "",
  },
});

export const filterState = atom({
  key: "filterState",
  default: "",
});
