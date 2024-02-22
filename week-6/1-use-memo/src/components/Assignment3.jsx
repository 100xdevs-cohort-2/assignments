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
    const totalValue = useMemo(()=>{
        let sum =0;
        for(let i=0;i<items.length ;i++)
        {
            sum = sum+items[i].value;
        }
        return sum;
    },[items]);

    function addItemHandler(){
        setItems([...items,{
            name: 'New item', value: 30
        }])
    }
    // Your code ends here
    return (
        <div>
            <button onClick={addItemHandler}>Add item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
