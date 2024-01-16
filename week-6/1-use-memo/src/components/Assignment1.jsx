import React, { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  const [render, setRender] = useState(false);

  // Your solution starts here
  const factorial = (userInput) => {
    console.log("Heavy computation occured");
    if (userInput == 0 || userInput == 1) {
      return userInput;
    } else {
      const sa = factorial(userInput - 1);
      return sa * userInput;
    }
  };

  const calculation = useMemo(() => factorial(input), [input]);
  // Your solution ends here

  return (
    <div>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <Header text={"Some random text that can rerender"}></Header>
        <Header
          text={
            "console > components > settings > highlight rerendering components"
          }
        ></Header>
        <p>Calculated Factorial Value: {calculation}</p>
      </div>
      <Header
        text={"The factorial function should not re-compute unnecessarily"}
      ></Header>
      <Header
        text={
          "Hint: useMemo can prevent unnecessary re-renders of values or variables"
        }
      ></Header>
      <Header text={"Add console.log() in the factorial function"}></Header>
      <button
        onClick={() => {
          render == false ? setRender(true) : setRender(false);
          console.log(render);
        }}
      >
        Rerenders everything
      </button>
    </div>
  );
}

function Header({ text }) {
  return <h3>{text}</h3>;
} //??
