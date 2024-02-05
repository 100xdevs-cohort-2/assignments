import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here
    let sum = 0;
    const totalValue = useMemo(() => {
        // acc:- accumulator is the running sum and set initially to 0, currentValue is the current value from array
        return items.map(item => parseInt(item.value)).reduce((acc, currentValue) => acc + currentValue, 0);

        // above code is same as:
        // for (let i = 0; i < items.length; i++) 
        //     sum += parseInt(items[i].value);
        // return sum;
    }, [items]);

    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
