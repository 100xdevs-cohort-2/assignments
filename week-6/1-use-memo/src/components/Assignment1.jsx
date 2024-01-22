import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    let expensiveValue = 1; 
    expensiveValue = useMemo(()=> {
        for(let i = 1; i <= input; i++){
            expensiveValue *= i;
        }
        return expensiveValue
    },[input])
    // console.log(expensiveValue)
    // Your solution ends here

    return (
        
        <div>
            <input 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {console.log("Render")}{expensiveValue}</p>
        </div>
    );
}