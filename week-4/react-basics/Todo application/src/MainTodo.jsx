import React, { useEffect, useMemo, useState } from "react";
import TodoId from "./TodoId";

const MainTodo = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);

  let sum = useMemo(
    function () {
      console.log("dfjslaj");
      let count;
      for (let i = 0; i <= input; i++) {
        count += i;
      }
      return count;
    },
    [input]
  );

  return (
    <>
      <input
        type="number"
        onInput={(e) => {
          setInput(e.target.value);
        }}
      />
      <br></br>
      Sum is {sum}
      <br></br>
      <button
        value={counter}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </>
  );
};

export default MainTodo;
