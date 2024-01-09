import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
  const [addItem, setAddItem] = useState({ name: "", value: 0 });
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  // Your code starts here
  const totalValue = useMemo(() => {
    return items.reduce((previous, item) => previous + item.value, 0);
  }, [items.length]);
  // Your code ends here
  return (
    <div>
      <input
        onChange={(e) => {
          setAddItem((prev) => ({ ...prev, name: e.target.value }));
        }}
        placeholder="name"
      ></input>
      <br />
      <input
        onChange={(e) => {
          setAddItem((prev) => ({ ...prev, value: parseInt(e.target.value) }));
        }}
        placeholder="value"
      ></input>
      <br />
      <button onClick={() => setItems((prev) => [...prev, addItem])}>
        Add Item
      </button>

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

export { Assignment3 };
