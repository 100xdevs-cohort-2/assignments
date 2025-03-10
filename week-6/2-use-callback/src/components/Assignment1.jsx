import {useCallback, useState } from "react";
import React from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement =  useCallback(() => {
        setCount((prev) => prev+1);
    }, [])

    const handleDecrement = useCallback(() => {
        setCount((prev) => prev-1)
    }, [])
    // Your code ends here
    console.log("component is re-rendring")
    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
    
};

const CounterButtons = React.memo(({ onIncrement, onDecrement }) => {
    console.log("counter button re-render")
    return( <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
    )
});
