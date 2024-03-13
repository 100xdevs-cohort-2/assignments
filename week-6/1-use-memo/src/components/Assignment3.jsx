import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    // const [counter, setCounter] = useState(0);
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here
    const totalValue = useMemo(()=>{
        console.log("inside totalValue")
        let sum = 0;
        items.map((e)=>{
            // console.log(e)
            sum+=e.value;
        })
        return sum;
    }, [items])
    // Your code ends here
    return (
        <div>
            {/* <button onClick={()=>{
                setCounter(counter + 1)
            }}>{counter}</button> */}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
