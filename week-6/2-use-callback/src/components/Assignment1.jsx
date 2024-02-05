import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() => {
        // here we used method  to set State variable, currCount is the value of current count state variable
        // it's usefull coz when these function are not rendering there might change that count get updated  
        // & when this fun render then it incremnt the previous count value which function knows
        setCount(function(currCount) {
            currCount = currCount+1;
            return currCount;
        });
    }, []);
    
    const handleDecrement = useCallback(() => {
        setCount(currCount => currCount-1);
    }, []);
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
