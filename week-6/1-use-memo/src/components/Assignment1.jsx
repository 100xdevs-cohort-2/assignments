import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  // Function to calculate factorial
  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return n;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  };

  // Memoize factorial function
  const expensiveValue = useMemo(() => factorial(input), [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input === 0 ? "" : input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
