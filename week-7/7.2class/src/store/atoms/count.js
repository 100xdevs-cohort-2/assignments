/* eslint-disable no-unused-vars */
import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});

// Todo creation application with filtering logic
// todos, filter
