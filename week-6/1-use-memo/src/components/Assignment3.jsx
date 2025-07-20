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

    // "useMemo" should be used when there is "value" which involves expensive function call to calculate it ( good if we does not calculate after every re-render ) + that value depends on other state_variables, good pratice is used to use "useMemo"

    // Your code starts here
    const totalValue = useMemo(function() {
        let finalPrice = 0;
        items.forEach(item => finalPrice+=item.value);
        return finalPrice;
    }, [items]); // when the reference of the array changes than this task should be re-calculated
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
