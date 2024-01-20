import { useCallback, useState, memo } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.


function Solution1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    // function handleIncrement() {
    //     console.log("inside handle increment")
    //     setCount(count => count + 1)
    // }

    const handleIncrement = useCallback(() => {
        console.log("inside handle increment")
        return setCount(count => count + 1)
    }, [])

    // function handleDecrement() {
    //     console.log("inside handle decrement")
    //     setCount(count => count - 1)
    // }
    const handleDecrement = useCallback(() => {
        console.log("inside handle decrement")
        return setCount(count => count - 1)
    }, [])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
}

const CounterButtons = memo({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);

export default Solution1




