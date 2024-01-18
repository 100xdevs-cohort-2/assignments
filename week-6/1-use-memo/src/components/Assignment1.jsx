import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function factorial(n){
    if(n == 0){
        return 1;
    }
    let ans = 1;
    while(n>0){
        ans = ans * n;
        n--;
    }
    return ans;
}

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(()=>{
        console.log("Caluclating")
        return factorial(input);
    }, [input]) 
    // Your solution ends here
    console.log("Something")
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