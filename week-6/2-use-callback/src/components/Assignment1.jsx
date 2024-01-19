import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // // Your code starts here
    // const handleIncrement= useCallback(()=> {
    //     setCount(count+1)

    // }, [count])

    // const handleDecrement= useCallback(()=> {
    //     setCount(count-1)

    // }, [count])

    const handleIncrement= useCallback(()=> {
        setCount(function(CurrentValue){
            return CurrentValue+1;
        })

    }, [])

    const handleDecrement= useCallback(()=> {

        //ALL 3 ways are correct

        //1
        // setCount(function(CurrentValue){
        //     return CurrentValue-1;
        // })
         
        //2
        // setCount((CurrentValue)=>{
        //     return CurrentValue-1;
        // })

        setCount(CurrentValue=>CurrentValue-1);
        


    }, [])
    // // Your code ends here
   

    return (
        <div>
            <p>Count: {count}</p>
            {/* <div>Count: {count}</div> */}
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
