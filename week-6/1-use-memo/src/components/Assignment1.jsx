import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(1);
  const [random, setRandom] = useState(0);
  // Your solution starts here
  const factorial = (input) => {
    console.log("I am calculated");
    let ans = 1;
    for (let i = input; i >= 1; i--) {
      ans *= i;
    }
    return ans;
  };

  const expensiveValue = useMemo(() => {
    return factorial(input);
  }, [input]);

  // Your solution ends here
  console.log("rendered");
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
      <button
        onClick={() => {
          setRandom(Math.random());
        }}
      >
        {random}
      </button>
    </div>
  );
}
