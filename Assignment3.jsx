import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
    ]);

    const totalValue = [];
    let final = useMemo(() => {
        items.filter((e) => totalValue.push(e.value))
        let final = 0;
        for (let x of totalValue){
            final += x
        }
        return final
    },[items]) 
    
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} , Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {final}</p>
        </div>
    );
};
