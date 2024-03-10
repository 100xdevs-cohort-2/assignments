import React, { useMemo, useState } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = ({ theme }) => {
  const [items, setItems] = useState([
    { name: 'Chocolates', value: 10 },
    { name: 'Chips', value: 20 },
    { name: 'Onion', value: 30 },
    { name: 'Tomato', value: 30 },
    // Add more items as needed
  ]);

  // Your code starts here
  const totalValue = useMemo(() =>
    items.reduce((res, item) => res + item.value, 0), [items]
  );
  // Your code ends here
  return (
    <div className={theme}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - Price: ${item.value}</li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};
