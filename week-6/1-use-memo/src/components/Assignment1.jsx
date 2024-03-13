import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  const [count,setCount] = useState(0);
  const expensiveValue = useMemo(() => {
    let n = input;
    let fact = 1;
    while (n > 0) {
      fact *= n;
      n--;
    }
    return fact;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        // value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>{count} </button>
    </div>
  );
}
