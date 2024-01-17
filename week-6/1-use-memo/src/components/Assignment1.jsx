import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(()=>{

        let value = 1;
        for(let i = 1; i <= input; i++){
            value = value * i;
        }
        return value;
    }, [input]); 

    // the difference between useMemo and useEffect is that in useMemo we can return some value,
    // whereas in useEffect we don't return anything, even though both practically speaking do the same thing

    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}