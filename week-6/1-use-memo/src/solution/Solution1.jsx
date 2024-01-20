import { useMemo, useState } from "react";

function Solution1() {
    const [input, setInput] = useState(0);
    console.log("input = ", input)

    // function FindFactorial(num) {
    //     console.log("calculating factorial")
    //     let ans = 1;
    //     for (let i = 1; i <= num; i++) ans = ans * i;
    //     return ans;
    // }

    // // Your solution starts here
    // const expensiveValue = FindFactorial(input)
    // console.log("expensive value", expensiveValue)

    function FindFactorial(num) {
        console.log("calculating factorial")
        let ans = 1;
        for (let i = 1; i <= num; i++) ans = ans * i;
        return ans;
    }

    // Your solution starts here
    const expensiveValue = useMemo(() => {
        console.log("inside useMemo")
        return FindFactorial(input)
    }, [input])
    console.log("expensive value", expensiveValue)

    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    )
}

export default Solution1


// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

