import { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  // Your code starts here
  const totalValue = useMemo(() => {
    return items.reduce((acc, item) => acc + item.value, 0);
  }, [items]);

  function AddItem() {
    const itemName = document.getElementById("itemName").value;
    const itemValue = parseInt(document.getElementById("itemValue").value);
    setItems([...items, { name: itemName, value: itemValue }]);
  }
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
      <div>
        <input id="itemName" type="text" placeholder="Item name" />
        <br />
        <input id="itemValue" type="number" placeholder="Item value" />
        <br />
        <button onClick={AddItem}>Add item</button>
      </div>
    </div>
  );
};
