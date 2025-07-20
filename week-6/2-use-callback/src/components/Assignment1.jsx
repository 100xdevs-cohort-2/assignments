import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

// Everytime when the component re-renders, the normal function / variables present inside the component gets re-created ( their reference gets changed ) this causes the child components to also get re-render because the value of props are changed ( comparision of "number, string, boolean, undefined, null" is done on the basis "value" and f"unction, array and objects" are based on the "reference"  ) 

// => "useCallback is used with functions" so that on every re-render they (functions) does not get re-created and if we want to re-create them we will use dependency_array

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    // Now these two functions will created only once when the component intially mounts / renders, whenever Parent component re-renders these two will use the same reference and hence the child will not re-render (must be wrapped inside memo )
    const handleIncrement = useCallback(function() {
        setCount((previousValue) => previousValue + 1);
    }, [])

    const handleDecrement = useCallback(function() {
        setCount((previousValue) => previousValue - 1);
    }, [])

    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            {/* Now when the Parent component re-renders these two functions are re-created ( their reference has changed  ) this causes the child (CounterButtons) to also, which might descrease the performance => use useCallback to prevent the re-creation of the functions, and if we want to re-create the functions again we can rely on the dependency_array */}
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(function ({ onIncrement, onDecrement }) {
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    )
})
