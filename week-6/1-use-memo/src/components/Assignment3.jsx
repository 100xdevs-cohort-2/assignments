import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Chips", value: 20 },
    { name: "Chips", value: 20 },

    // Add more items as needed
  ]);
  //we need to use memo such that when items get changed we will add a new value
  // Your code starts here
  let totalValue = 0;
  totalValue = useMemo(() => {
    let sum = 0;
    items.map((item) => {
      sum += item.value;
    });
    return sum;
  }, [items]);
  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};

export default Assignment3;
