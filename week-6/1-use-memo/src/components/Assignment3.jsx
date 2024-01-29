import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Peas", value: 20 },
    // Add more items as needed
  ]);

  // Your code starts here
  let totalValue = 0;
  // Your code ends here
  let totalCost = 0;
  function totalVal(items) {
    items.map((item) => (totalCost += item.value));
    return totalCost;
  }
  totalValue = useMemo(() => totalVal(items), [items]);

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
