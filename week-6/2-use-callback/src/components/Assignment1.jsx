import { useCallback } from "react";
import { useState, memo } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  const handleIncrement = useCallback(() => {
    console.log("Increment function called");
    setCount((currentCount) => currentCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    console.log("Decrement function called");
    setCount((currentCount) => currentCount - 1);
  }, []);
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <div>
        <button onClick={() => setCount(count)}>Renders Everything</button>
      </div>
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <div>
      {console.log("CounterButtons render")}
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  </div>
));

/*
- Remove useCallback and check logs. The Renders everything button does not renders the CounterButtons component because of memo() / memoizing it from external renders.

- However, if you increase or decrease the counter, the CounterButtons should not render, right? Since the component is memoized.

- React changes the reference of 'functions' on each render, forcing props to be different in each render therefore rendering the component.

- Without memo(), CounterButtons re-renders unnecessarily when its parent component re-renders, even if its props remain unchanged. This can impact performance, especially in larger applications with more complex components.

- memo() complements useCallback by preventing these unnecessary re-renders, optimizing performance and improving user experience. Therefore using memo in CounterButtons component to avoid unnecessary rendering
*/
