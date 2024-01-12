import { useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  let [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("increment rendered");
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
    console.log("decrement rendered");
  }, []);

  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = ({ onIncrement, onDecrement }) => (
  <div>
    <button style={{ display: "block" }} onClick={onIncrement}>
      Increment
    </button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);
