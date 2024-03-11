import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    console.log("Render start");
    const [input, setInput] = useState(0);

    // let expensiveValue = 1;
    // for (let i = 1; i <= input; i++) {
    //     expensiveValue = expensiveValue*i;
    // }

    const expensiveValue = useMemo(() => {
        console.log("UseMemo start");
        if(input==0 || input==1) return 1;
        let ans = 1
        for (let i = input; i > 1; i--) {
            ans*=i;
        }
        return ans;
    },[input]); 

        

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