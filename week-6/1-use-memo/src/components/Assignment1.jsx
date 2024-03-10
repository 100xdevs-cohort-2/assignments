import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);

   
    const processData =useMemo(()=>{


        const factorial =((num)=>{

            if(num==0 || num==1){

                return 1;
            }else{

                return num * factorial(num-1);
            }
        })

        const expensiveValue = factorial(input); 

        return expensiveValue;

    },[input])
   
    

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {processData}</p>
        </div>
    );
}