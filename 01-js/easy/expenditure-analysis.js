/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

const transactions=[
  {
    itemName: "Item 1",
    category: "Groceries",
    price: 50.0,
    timestamp: "2023-11-04",
  },
  {
    itemName: "Item 2",
    category: "Entertainment",
    price: 25.0,
    timestamp: "2023-11-04",
  },
  {
    itemName: "Item 3",
    category: "Groceries",
    price: 30.0,
    timestamp: "2023-11-05",
  },
  {
    itemName: "Item 4",
    category: "Bills",
    price: 80.0,
    timestamp: "2023-11-05",
  },
  {
    itemName: "Item 5",
    category: "Entertainment",
    price: 15.0,
    timestamp: "2023-11-06",
  },
]

function calculateTotalSpentByCategory(transactions) {
  let res = new Map();
  for(let i=0; i<transactions.length; i++) {
    let category = transactions[i].category;
    let amount = transactions[i].price;
    res.set(category, (res.get(category)|| 0) + amount);
  }
  return Array.from(res).map(([category, totalSpent]) => ({ category, totalSpent }));
}

module.exports = calculateTotalSpentByCategory;
